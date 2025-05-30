const hospitalName = "[Clinic Name]";

const navlinks = [
  { id: 0, name: "Home", link: "/" },
  { id: 1, name: "About Us", link: "/#about_us" },
  { id: 2, name: "Our Services", link: "/#our_services" },
  { id: 3, name: "Blog", link: "/#blog" },
  { id: 4, name: "Contact Us", link: "/#contact_us" },
];

const services = [
  {
    id: 1,
    service: " Comprehensive Eye Exams",
    description: "Detect vision problems and eye diseases early.",
    description2:
      "Our comprehensive eye examinations go beyond just checking your vision. We assess the overall health of your eyes, screen for early signs of conditions like glaucoma, cataracts, and macular degeneration, and ensure your prescription is up to date. It’s the first and most important step in protecting your long-term vision and catching issues before they become serious.",
    backgroundPicture: "/pic38.jpg",
  },
  {
    id: 2,
    service: "Glasses & Prescription Lenses",
    description: "Expert prescription and wide range of frames and lenses.",
    description2:
      "We offer accurate prescriptions paired with a wide selection of stylish, durable frames and high-quality lenses to match your lifestyle. Whether you need glasses for reading, driving, or everyday wear, our experts help you choose lenses that provide the clearest vision and the most comfort, so you can see and feel your best every day.",
    backgroundPicture: "/pic39.jpg",
  },
  {
    id: 3,
    service: "Contact Lens Fitting & Care",
    description: "Personalized fitting, training, and care tips.",
    description2:
      "Proper contact lens fitting is essential for both comfort and eye health. We take detailed measurements of your eyes to recommend the best lens type for your vision and lifestyle. Our team also guides you through proper hygiene, application, and maintenance to help you wear lenses with confidence and reduce the risk of complications.",
    backgroundPicture: "/pic36.jpg",
  },
  {
    id: 4,
    service: "Glaucoma Testing & Management",
    description: "Early detection and long-term care strategies.",
    description2:
      "Glaucoma is often called the 'silent thief of sight' because it can cause irreversible vision loss before symptoms appear. Our clinic provides thorough screening, early detection, and personalized treatment plans using advanced technology. With ongoing monitoring and care, we help slow disease progression and preserve your vision.",
    backgroundPicture: "/pic35.jpg",
  },
  {
    id: 5,
    service: "Children’s Eye Care",
    description: "Eye exams, screenings, and vision correction for kids.",
    description2:
      "Clear vision is vital to a child’s learning and development. Our gentle and friendly pediatric eye care includes age-appropriate exams that detect vision problems, eye coordination issues, and early signs of conditions that may affect your child’s success in school. We make each visit comfortable, informative, and tailored to young patients.",
    backgroundPicture: "/pic37.jpg",
  },
  {
    id: 6,
    service: "Dry Eye Treatment",
    description: "Relief for discomfort, itching, and blurred vision.",
    description2:
      "If you experience frequent dryness, irritation, or a gritty feeling in your eyes, you may be suffering from dry eye syndrome. We evaluate the root causes—whether due to screen time, environment, or medical conditions—and offer targeted treatments like artificial tears, prescription drops, or lifestyle adjustments to restore comfort and protect your eyes.",
    backgroundPicture: "/pic33.jpg",
  },
];

const staffs = [
  { id: 0, url: "/pic6.jpg", name: "Dr. James Maxwell", role: "Doctor" },
  { id: 1, url: "/pic7.jpg", name: "Dr. Catherine May", role: "Cardiologist" },
  { id: 2, url: "/pic8.jpg", name: "Dr. David Victory", role: "Optometrist" },
  { id: 3, url: "/pic9.jpg", name: "Dr. Sandra Omoko", role: "Dentist" },
  { id: 4, url: "/pic10.jpg", name: "Dr. Hannah Victor", role: "Nurse" },
  { id: 5, url: "/pic11.jpg", name: "Dr. Matthew Glory", role: "Nurse" },
  { id: 6, url: "/pic8.jpg", name: "Dr. Roy Judith", role: "Dermatologist" },
  { id: 7, url: "/pic7.jpg", name: "Dr. Juliet Osato", role: "Doctor" },
  { id: 8, url: "/pic6.jpg", name: "Dr. Divine Bimbo", role: "Doctor" },
  { id: 9, url: "/pic10.jpg", name: "Dr. Ejike Ebube", role: "Doctor" },
  { id: 10, url: "/pic11.jpg", name: "Dr. Jennifer Chopra", role: "Doctor" },
  { id: 11, url: "/pic9.jpg", name: "Dr. Chika TJ", role: "Doctor" },
];

const blog = [
  {
    id: 1,
    day: "19",
    month: "MAR",
    year: "2022",
    picture: "/pic1.jpg",
    title: "5 Signs You Should See a Doctor Sooner Than Later",
    paragraph1:
      "Many people delay visiting a doctor, hoping symptoms will pass. While some discomforts are harmless, others may signal something serious. Knowing when to act can make a big difference.",
    paragraph2:
      "Persistent fatigue that doesn’t improve with rest could point to underlying health issues like thyroid disorders, infections, or even anemia. It’s best to get it checked early.",
    paragraph3:
      "Unexplained pain, especially if it's recurring or increasing in intensity, should never be ignored. Pain is your body’s way of alerting you to a problem.",
    paragraph4:
      "Sudden weight loss or gain without changes in diet or activity could indicate metabolic or hormonal imbalances. A consultation can uncover the root cause.",
    paragraph5:
      "If you experience chest pain, shortness of breath, or dizziness, don’t wait. These could be symptoms of serious heart or lung conditions that require immediate medical attention.",
  },
  {
    id: 2,
    day: "23",
    month: "AUG",
    year: "2025",
    picture: "/pic4.jpg",
    title:
      "Preparing for a Healthy Pregnancy: What Every Expecting Mother Should Know",
    paragraph1:
      "Pregnancy is a beautiful journey, but it also requires proper planning and care. Starting with prenatal visits can ensure the best health outcomes for both mother and baby.",
    paragraph2:
      "Taking prenatal vitamins, especially folic acid, is essential in the early weeks. It helps in the development of the baby’s brain and spinal cord and reduces the risk of birth defects.",
    paragraph3:
      "Regular checkups allow doctors to monitor the baby’s growth, manage any risks, and provide guidance on nutrition, exercise, and lifestyle changes.",
    paragraph4:
      "It’s important to listen to your body. If you experience unusual symptoms like swelling, blurred vision, or severe cramps, inform your healthcare provider immediately.",
    paragraph5:
      "Creating a birth plan and choosing a trusted maternity facility can make delivery smoother. Our maternity team is here to support you every step of the way.",
  },
  {
    id: 3,
    day: "11",
    month: "JUN",
    year: "2016",
    picture: "/pic3.jpg",
    title: "Why Regular Health Screenings Could Save Your Life",
    paragraph1:
      "Many serious conditions — like high blood pressure, diabetes, and certain cancers — develop silently. Health screenings help detect them before symptoms appear.",
    paragraph2:
      "Routine checks such as blood pressure, cholesterol levels, and blood sugar can be done in a few minutes, yet they provide crucial insight into your overall health.",
    paragraph3:
      "Annual screenings tailored to your age, gender, and family history can help catch diseases early when they’re most treatable — or even prevent them entirely.",
    paragraph4:
      "Our hospital offers personalized screening packages, ensuring you get the right tests based on your unique health profile and lifestyle.",
    paragraph5:
      "Don’t wait until something feels wrong. Scheduling your next health screening is a simple, proactive step toward living a longer, healthier life.",
  },
];

const contactInformation = [
  {
    id: 0,
    whatsapp: "+2349139124809",
    phone1: "+2349139124809",
    phone2: "+2348119238643",
    email: "opubortony@gmail.com",
    address: "No. 9 rubber plantation Warri, Delta state, Nigeria.",
    openingHours: "MON - FRI, 9am - 5pm",
    facebook:
      "https://www.facebook.com/profile.php?id=100094794262869&mibextid=LQQJ4d",
    twitter: "https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA==",
    instagram: "https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA==",
  },
];

const gallery = [
  {
    id: 1,
    picture: "/pic9.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 2,
    picture: "/pic1.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 3,
    picture: "/pic2.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 4,
    picture: "/pic4.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 5,
    picture: "/pic6.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 6,
    picture: "/pic2.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 7,
    picture: "/pic12.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
  {
    id: 8,
    picture: "/pic13.jpg",
    caption: "Youth empowerment program at Gboko Benue state.",
  },
];

export {
  hospitalName,
  blog,
  contactInformation,
  navlinks,
  services,
  staffs,
  gallery,
};
