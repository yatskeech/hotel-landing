"use client";

import { cx } from "class-variance-authority";
import { ChangeEvent, ReactNode, useState } from "react";

import { Button } from "@/shared/ui";

const defaultFormData = { name: "", surname: "", gender: "male", agree: false };

export function ModalForm({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.surname || !formData.agree) return;
    closeModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData(defaultFormData);
  };

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="bg-white pt-20 pb-12 px-7 rounded-lg w-[300px] relative border border-accent"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-9 right-6 text-gray-500 hover:text-gray-700 text-xl cursor-pointer"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-xl font-extrabold text-center text-accent mb-4">
              Request a call
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col gap-2 text-xs">
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="border border-[#CDCDCD] text-accent placeholder:text-[#8A8A8A] px-4 py-3 rounded-md focus:outline-none focus:border-accent"
                />
              </label>
              <label className="flex flex-col gap-2 text-xs">
                Name
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="border border-[#CDCDCD] text-accent placeholder:text-[#8A8A8A] px-4 py-3 rounded-md focus:outline-none focus:border-accent"
                />
              </label>
              <div className="flex flex-col gap-2">
                <span className="text-xs">Gender</span>
                <div className="flex gap-16">
                  <label className="flex items-center gap-2 cursor-pointer text-xs">
                    <div className="w-4 h-4 border border-accent rounded-full flex items-center justify-center">
                      {formData.gender === "male" && (
                        <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    Male
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer text-xs">
                    <div className="w-4 h-4 border border-accent rounded-full flex items-center justify-center">
                      {formData.gender === "female" && (
                        <div className="w-2.5 h-2.5 bg-accent rounded-full" />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      className="hidden"
                    />
                    Female
                  </label>
                </div>
              </div>
              <label className="flex items-center gap-2 cursor-pointer text-xs text-[#989898] mt-8">
                <div
                  className={cx(
                    "shrink-0 w-4 h-4 border border-accent rounded-full flex items-center justify-center",
                    { "bg-accent": formData.agree }
                  )}
                >
                  {formData.agree && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="hidden"
                />
                <span>
                  I have read and agree to{" "}
                  <span className="underline font-bold">
                    the Privacy Policy.
                  </span>
                </span>
              </label>
              <Button type="submit" className="self-center">
                Request
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
