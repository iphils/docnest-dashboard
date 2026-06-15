// Contact configuration used by the WhatsApp booking forms on index.html
// and booking.html. Page content and SEO tags live statically in the HTML
// so search engines and WhatsApp/social link previews can read them.
const siteConfig = {
  contact: {
    whatsapp: {
      number: "917994247237",
      text: "Hello! I'm preparing for [EXAM NAME] and looking for a study space from [START DATE] to [END DATE]. Can you share details about seat availability?",
      display: "💬 Send Booking Request",
      fields: [
        { placeholder: "[EXAM NAME]", label: "Exam you're preparing for", inputType: "text", required: true },
        { placeholder: "[START DATE]", label: "Start date", inputType: "date", required: true },
        { placeholder: "[END DATE]", label: "End date", inputType: "date", required: true }
      ]
    },
    phone: {
      number: "+917994247237",
      display: "+91 79942 47237"
    },
    address: {
      line1: "1st Floor, 25th Hour Clinic"
    }
  }
};
