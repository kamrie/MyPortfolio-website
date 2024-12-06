const hiddenProjectDetails = document.querySelector(".hiddenProject-details");
console.log(hiddenProjectDetails)

window.addEventListener("scroll", function () {
  const firstSection = document.querySelector("#first-section");
  const scrollArrow = document.querySelector(".scroll-arrow");
//   const container = document.querySelector(".container")
  // Adjust this value to control when the fade starts
  const fadePoint = 1230;
  
  // Calculate the opacity based on scroll position
  let opacity = 1 - window.scrollY / fadePoint;
  // console.log(window.scrollY)
  
  // Limit opacity to 0 (fully transparent) when scrolled past fadePoint
  opacity = Math.max(opacity, 0); // will always choose the maximum value between opacity and 0
  
  // Apply opacity to elements
  firstSection.style.opacity = opacity;
  scrollArrow.style.opacity = opacity;
  container.style.opacity = opacity;
});


//logic for the "see more" button 
document.addEventListener("DOMContentLoaded", () => { //Wrapping your code in the DOMContentLoaded event ensures that your JavaScript code only runs after the HTML is fully loaded and all the DOM elements are available.
  const toggleButton = document.getElementById("toggle-projects");
  const hiddenProjects = document.querySelectorAll(".hiddenProject-details");
  

  toggleButton.addEventListener("click", () => {
        hiddenProjects.forEach(project => {
          project.style.display = project.style.display === "none" || project.style.display === "" ? "block"  : "none";
         });
         // Toggle button text
        toggleButton.textContent = 
        toggleButton.textContent === "see all" ? "show less" : "see all";
                  project.classList.add('project-detail')

    });

    // Initially hide all hidden projects
    hiddenProjects.forEach(project => (project.style.display = "none"))
})


function toggleMenu(e) {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('show');
}

// Close the menu when a link is clicked
document.querySelectorAll('.menu a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    menu.classList.remove('show');
  });
});












// //  NODEJS

// //    Create and write to file
// fs.writeFile( path.join(__dirname, '/test', 'hello.text'),
//  'Hello world!', 
//  err => {
//     if(err) throw err;
//      console.log('file written to...')

//   // file append
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'),
//             'I love Nodejs!',
//             err => {
//                 if(err) throw err;
//                 console.log()
//             }

//         )
// })




// // Rename a file
// fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello world.text'), err => {
//     if(err) throw err;
//     console.log('file.renamed...')
// })


// const http = require('http');

//   http.createServer((res, req) => {
//       res.write('Hello  world')
//       res.end
//   }).listen(5000, () => console.log('server running...'))