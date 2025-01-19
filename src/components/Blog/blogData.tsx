import { Blog } from "@/types/blog";

const blogData: Blog[] = [
    /*  
    {
        id: X,
        title: "MMMMMM",
        paragraph:
          "MMMMMM",
        image: "/images/blog/blog000X/blogX.svg",
        alt: "MMMMMM - Alt text for image",
        width: 500,
        height: 375,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["MMMMMM - TAG"],
        publishDate: "September MMMMMM-DAY, 2024",
        blogURL: "/blog/posts/blogPage000X"
    },
    */
    {
        id: 13,
        title: "Join the Call for Council to Take Action",
        paragraph:
          "Announcing our NEW Postcard Campaign!",
        image: "/images/blog/blog0013/blog13.svg",
        alt: "Greetings from Gillies Grove, 10,000 years in the making",
        width: 500,
        height: 386,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["ACTION"],
        publishDate: "January 18, 2025",
        blogURL: "/blog/posts/blogPage0013"
    },
    {
        id: 12,
        title: "'Don't It Always Seem to Go ...'",
        paragraph:
          "Let's rewrite this song together!",
        image: "/images/blog/blog0012/blog12.svg",
        alt: "Old grown",
        width: 500,
        height: 375,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["Event"],
        publishDate: "January 16, 2025",
        blogURL: "/blog/posts/blogPage0012"
    },
    {
        id: 11,
        title: "A Call to the Community",
        paragraph:
          "STGA Chair Lacey Smith speaks from the heart",
        image: "/images/blog/blog0011/blog11.svg",
        alt: "Child stands on large tree stump in wintery forest",
        width: 500,
        height: 375,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["ACTION"],
        publishDate: "January 6, 2024",
        blogURL: "/blog/posts/blogPage0011"
    },
    {
        id: 10,
        title: "Biodiversity Tour Success",
        paragraph:
          "amid a snowy backdrop, the diversity of this incredible land shone through!",
        image: "/images/blog/blog0010/blog10.svg",
        alt: "Concerned local citizens join together in a beautiful wintery woodland setting.",
        width: 500,
        height: 450,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["UPDATE"],
        publishDate: "December 19, 2024",
        blogURL: "/blog/posts/blogPage0010"
    },

    {
        id: 9,
        title: "Gillies Grove Biodiversity Tour",
        paragraph:
          "Walk the Grove and learn more about this renowned ecosystem",
        image: "/images/blog/blog0009/blog9.svg",
        alt: "Autumn Forest",
        width: 500,
        height: 375,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["EVENT"],
        publishDate: "December 4, 2024",
        blogURL: "/blog/posts/blogPage0009"
    },
    
    {
        id: 8,
        title: "Response to Cavanagh\'s Announcement",
        paragraph:
          "STGA is not surprised, not deterred",
        image: "/images/blog/blog0008/blog8.svg",
        alt: "Sundrenched Woodland Path",
        width: 500,
        height: 280,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ['IMPORTANT NEWS'],
        publishDate: "October 31, 2024",
        blogURL: "/blog/posts/blogPage0008"
    },


    {
        id: 7,
        title: "Not a Done Deal!",
        paragraph:
          "We don’t want a housing development beside and cutting into the Grove.",
        image: "/images/blog/blog0007/blog7.svg",
        alt: "People walking a woodland path",
        width: 500,
        height: 270,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["UPDATE"],
        publishDate: "October 17, 2024",
        blogURL: "/blog/posts/blogPage0007"
    },
    {
        id: 6,
        title: "Giving Thanks to the Grove",
        paragraph:
          "Silent Walk + Social Gathering",
        image: "/images/blog/blog0006/blog6.svg",
        alt: "Beautiful Woodland Path",
        width: 1000,
        height: 750,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["EVENT"],
        publishDate: "October 3, 2024",
        blogURL: "/blog/posts/blogPage0006"
    },
  
    {
        id: 5,
        title: "Expert Opinion on Proposed Development",
        paragraph:
          "Alberto Suárez-Esteban, Ph.D in Biology with a concentration in Plant Ecology and Conservation, M.Sc in Biodiversity, B.Sc.in Biology, speaks at the STGA Launch event on Saturday, September 7, 2024",
        image: "/images/blog/blog0005/blog5.svg",
        alt: "Human and dog walk along beautiful wooded trail with signage, Hemlock Loop",
        width: 552,
        height: 296,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["Expert Opinion"],
        publishDate: "September 20, 2024",
        blogURL: "/blog/posts/blogPage0005"
    },
   
    {
        id: 4,
        title: "RESPONSE TO GALILEE'S LETTER TO THE COMMUNITY",
        paragraph:
          "STGA Chair Lacey Smith responds to Galilee Centre's Newsletter sent out Monday September 16th, the last day of Cavanagh's due diligence period.",
        image: "/images/blog/blog0004/blog4.svg",
        alt: "Bucolic winding sandy path through forest-bordered field",
        width: 592,
        height: 790,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["Important News"],
        publishDate: "September 18, 2024",
        blogURL: "/blog/posts/blogPage0004"
    },
    {
        id: 3,
        title: "URGENT REQUEST",
        paragraph:
          "Urgent Call to Action for Save the Grove Again Volunteers",
        image: "/images/blog/blog0003/blog3.svg",
        alt: "Two children in woods-bordered field",
        width: 500,
        height: 500,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["Action"],
        publishDate: "September 15, 2024",
        blogURL: "/blog/posts/blogPage0003"
    },
    {
        id: 2,
        title: "What's Next, after Well-Attended Launch Event",
        paragraph:
          "Arnprior citizens and Volunteers gathered together on Saturday September 7th, to show their support.  What's Next?",
        image: "/images/blog/blog0002/group-pic.svg",
        alt: "Event Group Photo, plus Update as post category",
        width: 1000,
        height: 750,
        author: {
          name: "",
          image: "",
          designation: "",
        },
        tags: ["Update"],
        publishDate: "September 11, 2024",
        blogURL: "/blog/posts/blogPage0002"
    },
      
  {
    id: 1,
    title: "Save the Grove Again Information Session- Planting the Seed",
    paragraph:
      "Join us for an information session for the Save the Grove Again campaign.",
    image: "/images/blog/blog0001/event-pic.svg",
    alt: "Trees viewed through leafy border, with text: We need your help to save the grove again, plus Event as blog post category",
    width: 1000,
    height: 750,
    author: {
      name: "",
      image: "",
      designation: "",
    },
    tags: ["event"],
    publishDate: "September 05, 2024",
    blogURL: "/blog/posts/blogPage0001"
  },


];
export default blogData;
