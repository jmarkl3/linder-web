import React from 'react'

let privacyPolicyTitle = "Privacy Policy for Linder"
let privacyPolicyTitle2 = "Last Updated: 2024-12-19"
let privacyPolicyText = `
At [App Name], we are committed to protecting your privacy and ensuring a safe and secure experience for all users. This Privacy Policy explains how we collect, use, and protect your personal information when you use our dating app. By using our app, you consent to the practices described in this policy.

1. Information We Collect
We collect the following types of information when you use [App Name]:

Personal Information: This includes your name, age, and general location (city and distance from other users) that you provide when you create your profile. This information is required to help you connect with other users.

Location Data: We collect your general location (city and distance from other users) to show potential matches in nearby areas. We do not collect precise GPS data or track your exact location.

Age: We collect your age to ensure that you meet the age requirement of 18 or older to use our app.

2. How We Use Your Information
We use the information we collect for the following purposes:

To allow users to connect with each other and engage in conversations.
To display general location information (city and distance) to other users.
To verify that users meet the age requirement of 18 or older.
To improve the overall user experience and app functionality.
3. Data Deletion
You have control over your personal data. If you wish to delete all the information you’ve provided, you can do so at any time by clicking the Delete All Data button in the app. This will remove your account, profile information, and any associated data from our system.

4. How We Share Your Information
We do not share your personal data with third parties except for the following limited circumstances:

With service providers who help us operate the app and provide its functionality. These service providers are required to comply with our privacy practices and use your data only for the purposes of operating and improving the app.

As required by law, such as to comply with a subpoena, court order, or other legal process.

We do not sell, rent, or trade your personal information to third parties for marketing purposes.

5. Data Security
We take appropriate technical and organizational measures to protect your personal data from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, so we cannot guarantee absolute security.

6. Children’s Privacy
Our app is intended for users aged 18 and older. We do not knowingly collect or solicit personal information from users under the age of 18. If we learn that we have collected personal information from a child under 18, we will promptly delete that information.

7. Your Rights and Choices
You have the right to access, update, or delete the personal information you have provided in the app at any time.
You can also choose to stop using the app and delete your account via the Delete All Data option in the app settings.
8. Changes to This Privacy Policy
We may update this Privacy Policy from time to time. When we do, we will post the revised policy within the app and on our website. The date of the most recent update will be indicated at the top of this page. We encourage you to review this policy periodically.

9. Contact Us
If you have any questions about this Privacy Policy or our privacy practices, please contact us at:

Linder
JMarkle@protonmail.com  
`
function PrivacyPolicyLinder() {
  return (
    <div>
        <div style={{fontSize: "20px", fontWeight: "bold", width: "100%", textAlign: "center", paddingTop: "20px"}}>
            {privacyPolicyTitle}
        </div>
        <div style={{fontSize: "14px", width: "100%", textAlign: "center"}}>
            {privacyPolicyTitle2}
        </div>
        <div style={{ whiteSpace: 'pre-line', textAlign: "left", paddingRight: "20px", paddingLeft: "20px", paddingBottom: "20px"}}>
            {privacyPolicyText}
        </div>
    </div>
  )
}

export default PrivacyPolicyLinder