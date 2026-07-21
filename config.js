// Contact + branch configuration used by the WhatsApp booking forms on the
// branch pages (east-fort.html, metro.html) and booking.html. Page content
// and SEO tags live statically in the HTML so search engines and
// WhatsApp/social link previews can read them.
//
// Contact and payment (phone, WhatsApp, UPI QR) are shared across all
// branches. Only the location and pricing differ per branch — see `branches`.
const siteConfig = {
  contact: {
    whatsapp: {
      number: "917994247237",
      // [BRANCH] is filled in per page (see initBookingForm's `branch` option
      // or the container's data-branch attribute). Defaults to a generic
      // phrase when no branch is supplied.
      text: "Hello! I'm interested in [BRANCH] and preparing for [EXAM NAME]. I'm looking for a study space from [START DATE] to [END DATE]. Could you please share seat availability?",
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
    }
  },

  // Refundable caution deposit is the same at every branch.
  cautionDeposit: 500,

  branches: {
    "east-fort": {
      name: "East Fort",
      // Used to fill [BRANCH] in the WhatsApp message.
      whatsappLabel: "DocNest East Fort, Thripunithura",
      status: "open",
      monthly: 2000,
      daily: 299,
      address: {
        line1: "1st Floor, 25th Hour Clinic",
        full: "1st Floor, 25th Hour Clinic, Main Road, Thripunithura, Ernakulam, Kerala 682301"
      }
    },
    "metro": {
      name: "Metro Station",
      whatsappLabel: "the upcoming DocNest branch at Thripunithura Terminal Metro Station",
      status: "opening-soon",
      monthly: 2500,
      daily: 299,
      address: {
        line1: "Beside Thripunithura Terminal Metro Station",
        // Pillar number kept here for the on-site/footer address only.
        full: "Beside Thripunithura Terminal Metro Station, Pillar No. 1044, Thripunithura, Ernakulam, Kerala"
      }
    }
  }
};
