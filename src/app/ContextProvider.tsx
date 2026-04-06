"use client";

import ContactForm from "@/components/ContactForm";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContactFormContextType {
  openContactForm: () => void;
  closeContactForm: () => void;
}

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openContactForm = () => setIsOpen(true);
  const closeContactForm = () => setIsOpen(false);

  return (
    <ContactFormContext.Provider value={{ openContactForm, closeContactForm }}>
      {children}
      {/* The Popup is rendered here once at the root level */}
      <ContactForm isOpen={isOpen} onClose={closeContactForm} />
    </ContactFormContext.Provider>
  );
};

// Custom hook for cleaner implementation in components
export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (context === undefined) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
};