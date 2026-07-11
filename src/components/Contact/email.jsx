/**
 * Email Sending Utility using Web3Forms API
 * Pre-configured with your Access Key: 9b9d8470-58e7-4bac-ba68-f06811e5c080
 */

export async function sendEmail(formData) {
  const ACCESS_KEY = "9b9d8470-58e7-4bac-ba68-f06811e5c080"; 

  // Web3Forms expects FormData or JSON. Let's use FormData directly to ensure optimal delivery.
  const data = new FormData();
  data.append("access_key", ACCESS_KEY);
  data.append("name", formData.name);
  data.append("email", formData.email);
  data.append("subject", formData.subject);
  data.append("message", formData.message);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    });

    const result = await response.json();
    
    // Log the API response in the console for troubleshooting
    console.log("Web3Forms Submission Result:", result);

    if (result.success) {
      return { success: true, message: result.message };
    } else {
      return { success: false, message: result.message || "Failed to send email." };
    }
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "Network error. Please check your connection." };
  }
}