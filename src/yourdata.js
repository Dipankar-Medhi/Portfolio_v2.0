// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import autocadIcon from "./images/autocad.svg"
import pythonIcon from "./images/python.svg"
import flutterIcon from "./images/flutter.svg"
import ML from "./images/ml.png"
import tailwind from "./images/tailwind.svg"
import jupyter from "./images/jupyter.svg"
import sketchup from "./images/sketchup.png"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Dipankar Medhi",
  headerTagline: [
    //Line 1 For Header
    "Learning",
    //Line 2 For Header
    "and building",
    //Line 3 For Header
    "experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Learn everything, who knows when it might come in handy.",

  //Contact Email
  contactEmail: "dipankarmedhi11@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [

    {
      title: "ML Concrete compressive strength", //Project Title - Add Your Project Title Here
      para:
        "A small ML project to estimate the compressive strength of concrete.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://live.staticflickr.com/65535/51123321840_d42705c6d6_z.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/Dipankar-Medhi/ML_concrete_cs_prediction",
    },
    {
      title: "Diabetes Prediction ML project", //Project Title - Add Your Project Title Here
      para:
        "A ML project build with Nextjs and fastAPI to predict the diabetes. Dataset used: PIMA indians diabetes dataset from Kaggle", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://live.staticflickr.com/65535/51311228879_fbc9fd993c_z.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://diabetes-web-app.vercel.app/",
    },
    {
      title: "A News app built with Nextjs and Tailwind CSS", //Project Title - Add Your Project Title Here
      para:
        "A tech news Nextjs app built with NewsApi and Tailwind CSS", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://live.staticflickr.com/65535/51311247149_61fe631418_z.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://tech-news-app.vercel.app/",
    },


    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I'm a Civil Engineering undergraduate at Assam Engineering College, Guwahati. Learning new and cool stuffs, exploring and knowing how things work is my hobby.And according to me, everyone should know something of everything 😁. SO I try to get my hands on everything possible.",
  aboutParaTwo:
    "Programming and exploring tech is my favourite. I can sit in front of a computer 💻 without even realising how much hours I have spent. Apart from programming I like CAD and other application of computers on the field of my specialisation.",
  aboutParaThree:
    "I have worked with Javascript, React (for web development), Flutter (for application development), python and Machine Learning, Autocad (for basic planning) and Etabs. Done planning with autocad and made models with Etabs.",
  aboutParaFour:
    "I still have a long way to go. There is a lot to learn and explore, and gather knowledge of the latest innovations in the technical field. So I will keep moving forward, Untill I fill my hunger.",
  aboutImage:
    "https://images.unsplash.com/photo-1527296731628-d1dccc1fd849?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=340&q=100",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [

    {
      img: jupyter,
      para:
        "JUPYTER",
    },
    {
      img: ML,
      para:
        "MACHINE LEARNING",
    },
    {
      img: jsIcon,
      para:
        "JAVASCRIPT",
    },
    {
      img: reactIcon,
      para:
        "REACT",
    },
    {
      img: autocadIcon,
      para:
        "AUTOCAD",
    },
    {
      img: sketchup,
      para:
        "SKETCHUP",
    },
    {
      img: tailwind,
      para:
        "TAILWIND CSS",
    },
    {
      img: pythonIcon,
      para:
        "PYTHON",
    },

    {
      img: htmlIcon,
      para:
        "HTML",
    },
    {
      img: cssIcon,
      para:
        "CSS",
    },
    {
      img: flutterIcon,
      para:
        "FLUTTER",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Have anything to discuss? Contact me.",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: githubIcon,
      url: "https://github.com/Dipankar-Medhi"
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
