// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

/**
 * POST /api/contact
 * Send contact form submission via email
 *
 * Production-grade with validation, error handling, and security
 */

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Organization email address
const ORGANIZATION_EMAIL =
  process.env.CONTACT_EMAIL_TO || "contact@leadnex.com";
const FROM_EMAIL = process.env.CONTACT_EMAIL_FROM || "forms@leadnex.com";

interface ContactFormData {
  name: string;
  email: string;
  contact: string;
  service: string;
  description?: string;
}

/**
 * Validate contact form data
 */
function validateContactForm(data: any): { valid: boolean; error?: string } {
  if (
    !data.name ||
    typeof data.name !== "string" ||
    data.name.trim().length === 0
  ) {
    return { valid: false, error: "Name is required" };
  }

  if (!data.email || typeof data.email !== "string") {
    return { valid: false, error: "Email is required" };
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: "Valid email is required" };
  }

  if (
    !data.contact ||
    typeof data.contact !== "string" ||
    data.contact.trim().length === 0
  ) {
    return { valid: false, error: "Contact number is required" };
  }

  if (
    !data.service ||
    typeof data.service !== "string" ||
    data.service.trim().length === 0
  ) {
    return { valid: false, error: "Service selection is required" };
  }

  if (data.description && typeof data.description !== "string") {
    return { valid: false, error: "Description must be text" };
  }

  return { valid: true };
}

/**
 * Generate HTML email template for organization
 */
function generateOrganiztationEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1f2937; }
          .container { max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; }
          .header { background: #ec1313; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 20px; }
          .label { font-weight: 600; color: #374151; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
          .value { margin-top: 5px; color: #1f2937; font-size: 14px; }
          .divider { border-top: 1px solid #e5e7eb; margin: 20px 0; }
          .footer { color: #6b7280; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
          a { color: #ec1313; text-decoration: none; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p style="margin: 0 0 20px 0; color: #6b7280;">A new inquiry has been received from the LeadNex contact form.</p>
            
            <div class="field">
              <div class="label">📋 Name</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>

            <div class="field">
              <div class="label">📧 Email</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>

            <div class="field">
              <div class="label">📱 Contact Number</div>
              <div class="value"><a href="tel:${escapeHtml(data.contact)}">${escapeHtml(data.contact)}</a></div>
            </div>

            <div class="field">
              <div class="label">🎯 Service Interest</div>
              <div class="value">${escapeHtml(data.service)}</div>
            </div>

            ${
              data.description
                ? `
            <div class="field">
              <div class="label">📝 Message</div>
              <div class="value" style="white-space: pre-wrap; word-break: break-word;">
                ${escapeHtml(data.description)}
              </div>
            </div>
            `
                : ""
            }

            <div class="divider"></div>

            <div class="footer">
              <p style="margin: 0;">This is an automated email from LeadNex's contact form.</p>
              <p style="margin: 5px 0 0 0;">Timestamp: ${new Date().toISOString()}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Generate HTML email template for user confirmation
 */
function generateUserConfirmationEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #1f2937; }
          .container { max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px; }
          .header { background: #ec1313; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
          .content { background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
          .footer { color: #6b7280; font-size: 12px; margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
          .highlight { color: #ec1313; font-weight: 600; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin: 0; font-size: 24px;">✓ Inquiry Received</h1>
          </div>
          <div class="content">
            <p>Dear <span class="highlight">${escapeHtml(data.name)}</span>,</p>
            
            <p>Thank you for reaching out to LeadNex. We have successfully received your inquiry regarding <strong>${escapeHtml(data.service)}</strong>.</p>

            <p>Our team will review your submission and get back to you shortly at the contact details you provided:</p>

            <ul style="margin: 15px 0;">
              <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
              <li><strong>Phone:</strong> ${escapeHtml(data.contact)}</li>
            </ul>

            <p>We typically respond within 24-48 business hours. If your inquiry is urgent, please feel free to reach out to us directly.</p>

            <p style="margin-top: 25px; color: #6b7280; font-size: 14px;">
              <strong>LeadNex Team</strong><br>
              Transforming Influence. Elevating Purpose.
            </p>

            <div class="footer">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                This is an automated confirmation email. Please do not reply to this message. Use the contact details above to reach our team.
              </p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

/**
 * Main handler
 */
export async function POST(request: NextRequest) {
  try {
    // Validate API key
    if (!process.env.RESEND_API_KEY) {
      console.error("[CONTACT_CONFIG_ERROR] Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Email service misconfigured. Please try again later." },
        { status: 500 },
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 },
      );
    }

    // Validate form data
    const validation = validateContactForm(body);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const formData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      contact: body.contact.trim(),
      service: body.service.trim(),
      description: body.description?.trim() || "",
    };

    console.log("[CONTACT_FORM_RECEIVED]", {
      name: formData.name,
      email: formData.email,
      service: formData.service,
    });

    // Send email to organization
    const orgEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: ORGANIZATION_EMAIL,
      subject: `📋 New Inquiry: ${formData.service} - ${formData.name}`,
      html: generateOrganiztationEmailHTML(formData),
    });

    if (orgEmailResult.error) {
      console.error("[CONTACT_EMAIL_ORG_ERROR]", orgEmailResult.error);
      return NextResponse.json(
        { error: "Failed to process your inquiry. Please try again." },
        { status: 500 },
      );
    }

    console.log("[CONTACT_EMAIL_ORG_SENT]", orgEmailResult.data?.id);

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: FROM_EMAIL,
      to: formData.email,
      subject: "✓ LeadNex - We've Received Your Inquiry",
      html: generateUserConfirmationEmailHTML(formData),
    });

    if (userEmailResult.error) {
      console.warn("[CONTACT_EMAIL_USER_ERROR]", userEmailResult.error);
      // Don't fail if user email fails - org email was sent successfully
    } else {
      console.log("[CONTACT_EMAIL_USER_SENT]", userEmailResult.data?.id);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Inquiry submitted successfully. Check your email for confirmation.",
      },
      { status: 201 },
    );
  } catch (error: any) {
    console.error("[CONTACT_FORM_ERROR]", {
      message: error.message,
      stack: error.stack,
    });

    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
