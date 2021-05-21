import React from 'react'
import { useParams } from "react-router-dom";

const SinglePage = () => {
  
  const aboutData = [
    {
      slug: "about-app",
      title: "About the app",
      description: 
      "In this app, you can add, delete, submit and edit to do items. To edit items, you can double click on it. Once you are done, press the enter key to resubmit. This app will retain  data in the browser local storage. So whether you reload, close your app or reopened it, you still have access to your to-dos items.",
    },
    {
      slug: "about-author",
      title: "About the developer",
      description: 
      "Developed by Andrew Pham. For more information, you can visit https://hanamanhpham.me. This app is sourced from Ibas Majid's GitHub repository.",
    },
  ];

  const { slug } = useParams();
  const aboutContent = aboutData.find(item => item.slug === slug);
  const {title, description} = aboutContent
  
  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
export default SinglePage
