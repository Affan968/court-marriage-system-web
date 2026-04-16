import { Form, useActionData, useNavigation } from "react-router";

// The 'action' function handles the form submission on the server-side
export async function action({ request }) {
  const formData = await request.formData();
  const name = formData.get("name");
  const phone = formData.get("phone");
  const message = formData.get("message");

  console.log("New Lead Received:", { name, phone, message });

  return { 
    success: true, 
    message: "Thank you! Your inquiry has been submitted successfully. Our legal team will contact you shortly." 
  };
}

export default function Contact() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div style={{ padding: '60px 10%', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2 style={{ color: '#002147', textAlign: 'center' }}>Contact Our Legal Experts</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
        Get legal assistance for Court Marriage and Nikah registration.
      </p>

      {actionData?.success && (
        <div 
          role="alert" // Added for Accessibility
          style={{ padding: '15px', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px', marginBottom: '20px', textAlign: 'center' }}
        >
          {actionData.message}
        </div>
      )}

      <Form method="post" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={formGroupStyle}>
          {/* Linked label to input using htmlFor/id */}
          <label htmlFor="full-name" style={labelStyle}>Full Name</label>
          <input 
            id="full-name" // Linked to label
            type="text" 
            name="name" 
            placeholder="e.g. Mohsin Ali" 
            required 
            style={inputStyle} 
          />
        </div>

        <div style={formGroupStyle}>
          {/* Linked label to input using htmlFor/id */}
          <label htmlFor="phone-number" style={labelStyle}>Phone Number / WhatsApp</label>
          <input 
            id="phone-number" // Linked to label
            type="tel" 
            name="phone" 
            placeholder="0302-6644789" 
            required 
            style={inputStyle} 
          />
        </div>

        <div style={formGroupStyle}>
          {/* Linked label to textarea using htmlFor/id */}
          <label htmlFor="case-requirements" style={labelStyle}>Case Requirements</label>
          <textarea 
            id="case-requirements" // Linked to label
            name="message" 
            rows="5" 
            placeholder="How can we help you?" 
            style={inputStyle}
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Submitting your inquiry" : "Send your inquiry"} // Added for Accessibility
          style={{ 
            padding: '15px', 
            background: isSubmitting ? '#999' : '#002147', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          {isSubmitting ? "Submitting..." : "Send Message"}
        </button>
      </Form>

      <div style={{ marginTop: '50px', textAlign: 'center', borderTop: '1px solid #ddd', paddingTop: '30px' }}>
        <h4 style={{ margin: '5px' }}>Direct Helpline</h4>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#002147' }}>0302-6644789 / 0316-6644789</p>
      </div>
    </div>
  );
}

const formGroupStyle = { display: 'flex', flexDirection: 'column', gap: '5px' };
const labelStyle = { fontWeight: 'bold', color: '#333' };
const inputStyle = { padding: '12px', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1rem' };