"use client"

import type React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Loader2 } from "lucide-react"

// Tipe untuk status pengiriman
type SubmissionStatus = "idle" | "sending" | "success" | "error";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<SubmissionStatus>("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending"); // Set status menjadi "mengirim"

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        // Reset form setelah berhasil
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Gagal mengirim form:", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:40px_40px] opacity-40"></div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-delay-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance text-white">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-lg text-gray-300 text-pretty max-w-1xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new
            opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="space-y-8 animate-fade-in-delay-2">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>

              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="p-5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110">
                    <Mail className="h-8 w-8 text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <p className="text-white font-medium">stevetan26022005@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="p-5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110">
                    <Phone className="h-8 w-8 text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                    <p className="text-white font-medium">+62 81353795500</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                  <div className="p-5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300 group-hover:scale-110">
                    <MapPin className="h-8 w-8 text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white font-medium">Tangerang, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/steve-febryanto-tan-aa7592371/"
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Linkedin size={20} className="text-gray-300 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://github.com/steve-tan-gh"
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Github size={20} className="text-gray-300 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Mail size={20} className="text-gray-300 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-fade-in-delay-2">
            <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 max-w-lg mx-auto md:mx-0 shadow-2xl shadow-black/20">
              <h3 className="text-2xl font-bold mb-6 text-white">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Steve Tan"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-900/60 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 rounded-lg"
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="steve@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-900/60 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 rounded-lg"
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Hello, I'd like to talk about..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-gray-900/60 border-gray-600 text-white placeholder:text-gray-500 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 min-h-[120px] resize-none rounded-lg"
                    required
                    disabled={status === "sending"}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-[1.02] group flex items-center justify-center"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </Button>
                {status === "success" && (
                  <p className="text-green-400 text-center mt-4">Pesan berhasil dikirim! Terima kasih.</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-center mt-4">Gagal mengirim pesan. Silakan coba lagi nanti.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}