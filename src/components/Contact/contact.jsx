import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus("error");
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Method 1: EmailJS (แนะนำ - ต้องไปสมัครที่ emailjs.com ก่อน)
      // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_PUBLIC_KEY')

      // Method 2: Simple mailto link (ใช้ได้ทันที)
      const subject = `Contact from ${formData.name}`;
      const body = `
  ชื่อ: ${formData.name}
  อีเมล: ${formData.email}
  
  ข้อความ:
  ${formData.message}
        `;

      const mailtoLink = `mailto:siraphop.px@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink);

      // Method 3: Form submission to external service
      // คุณสามารถใช้ Formspree, Netlify Forms, หรือ Google Forms

      setSubmitStatus("success");
      alert("ขอบคุณสำหรับข้อความ! โปรแกรมอีเมลของคุณจะเปิดขึ้นเพื่อส่งข้อความ");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-base-200 to-primary/5"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            พร้อมเริ่มโปรเจกต์ใหม่แล้วหรือยัง? มาสร้างสิ่งที่น่าทึ่งไปด้วยกัน!
            <br />
            <span className="text-sm">✨ ตอบกลับภายใน 24 ชั่วโมง</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="card bg-base-100 shadow-xl p-6">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Let's Connect!
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-base-content/70">
                      siraphop.px@gmail.com
                    </p>
                  </div>
                </div>
                {/* <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center">
                    📱
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-base-content/70">093-181-9593</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-base-content/70">
                      Ramkhamhaeng Soi 50, Huamark, Bangkapi, Bangkok
                    </p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="btn btn-circle btn-lg bg-gradient-to-r from-blue-500 to-blue-600 border-none text-white hover:scale-110 transition-transform"
              >
                📘
              </a>
              <a
                href="#"
                className="btn btn-circle btn-lg bg-gradient-to-r from-gray-700 to-gray-800 border-none text-white hover:scale-110 transition-transform"
              >
                🐙
              </a>
              <a
                href="#"
                className="btn btn-circle btn-lg bg-gradient-to-r from-blue-400 to-blue-500 border-none text-white hover:scale-110 transition-transform"
              >
                🐦
              </a>
              <a
                href="#"
                className="btn btn-circle btn-lg bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white hover:scale-110 transition-transform"
              >
                📷
              </a>
            </div>
          </div>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-6 text-primary">
                Send Message
              </h3>
              <div className="space-y-4">
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="ชื่อของคุณ"
                    className="input input-bordered w-full"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="อีเมลของคุณ"
                    className="input input-bordered w-full"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-control">
                  <textarea
                    name="message"
                    placeholder="ข้อความของคุณ"
                    className="textarea textarea-bordered h-32 resize-none"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="alert alert-success">
                    <span>✅ ส่งข้อความเรียบร้อยแล้ว!</span>
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="alert alert-error">
                    <span>❌ เกิดข้อผิดพลาด กรุณาลองใหม่</span>
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  className={`btn btn-primary w-full ${
                    isSubmitting ? "loading" : ""
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "กำลังส่ง..." : "ส่งข้อความ 🚀"}
                </button>

                {/* Alternative Contact Methods */}
                <div className="divider">หรือติดต่อโดยตรง</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href="mailto:siraphop.px@gmail.com"
                    className="btn btn-outline btn-sm"
                  >
                    📧 อีเมล
                  </a>
                  <a href="tel:093-181-9593" className="btn btn-outline btn-sm">
                    📞 โทร
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;