const mobile = [
    {
      "model": "iPhone 13 Pro Max",
      "display": "6.7 inches, Super Retina XDR",
      "resolution": "2778 x 1284 pixels",
      "chip": "A15 Bionic chip",
      "storage": "128GB, 256GB, 512GB, 1TB",
      "cameras": "12MP + 12MP + 12MP + TOF 3D LiDAR scanner",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Graphite", "Gold", "Silver", "Sierra Blue"],
      "price": "Starting at $1099"
    },
    {
      "model": "iPhone 13 Pro",
      "display": "6.1 inches, Super Retina XDR",
      "resolution": "2532 x 1170 pixels",
      "chip": "A15 Bionic chip",
      "storage": "128GB, 256GB, 512GB, 1TB",
      "cameras": "12MP + 12MP + 12MP + TOF 3D LiDAR scanner",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Graphite", "Gold", "Silver", "Sierra Blue"],
      "price": "Starting at $999"
    },
    {
      "model": "iPhone 13",
      "display": "6.1 inches, Super Retina XDR",
      "resolution": "2532 x 1170 pixels",
      "chip": "A15 Bionic chip",
      "storage": "128GB, 256GB, 512GB",
      "cameras": "12MP + 12MP + 12MP",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Starlight", "Midnight", "Blue", "Pink", "Red"],
      "price": "Starting at $799"
    },
    {
      "model": "iPhone 13 mini",
      "display": "5.4 inches, Super Retina XDR",
      "resolution": "2340 x 1080 pixels",
      "chip": "A15 Bionic chip",
      "storage": "128GB, 256GB, 512GB",
      "cameras": "12MP + 12MP + 12MP",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Starlight", "Midnight", "Blue", "Pink", "Red"],
      "price": "Starting at $699"
    },
    {
      "model": "iPhone SE (3rd generation)",
      "display": "4.7 inches, Retina HD",
      "resolution": "1334 x 750 pixels",
      "chip": "A15 Bionic chip",
      "storage": "64GB, 128GB, 256GB",
      "cameras": "12MP",
      "front_camera": "7MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP67",
      "colors": ["Starlight", "Midnight", "Blue", "Pink", "Red"],
      "price": "Starting at $429"
    },
    {
      "model": "iPhone 12 Pro Max",
      "display": "6.7 inches, Super Retina XDR",
      "resolution": "2778 x 1284 pixels",
      "chip": "A14 Bionic chip",
      "storage": "128GB, 256GB, 512GB",
      "cameras": "12MP + 12MP + 12MP + TOF 3D LiDAR scanner",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Graphite", "Gold", "Silver", "Pacific Blue"],
      "price": "Starting at $1099"
    },
    {
      "model": "iPhone 12 Pro",
      "display": "6.1 inches, Super Retina XDR",
      "resolution": "2532 x 1170 pixels",
      "chip": "A14 Bionic chip",
      "storage": "128GB, 256GB, 512GB",
      "cameras": "12MP + 12MP + 12MP + TOF 3D LiDAR scanner",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Graphite", "Gold", "Silver", "Pacific Blue"],
      "price": "Starting at $999"
    },
    {
      "model": "iPhone 12",
      "display": "6.1 inches, Super Retina XDR",
      "resolution": "2532 x 1170 pixels",
      "chip": "A14 Bionic chip",
      "storage": "64GB, 128GB, 256GB",
      "cameras": "12MP + 12MP + 12MP",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Black", "White", "Red", "Green", "Blue"],
      "price": "Starting at $799"
    },
    {
      "model": "iPhone 12 mini",
      "display": "5.4 inches, Super Retina XDR",
      "resolution": "2340 x 1080 pixels",
      "chip": "A14 Bionic chip",
      "storage": "64GB, 128GB, 256GB",
      "cameras": "12MP + 12MP + 12MP",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Black", "White", "Red", "Green", "Blue"],
      "price": "Starting at $699"
    },
    {
      "model": "iPhone 11",
      "display": "6.1 inches, Liquid Retina HD",
      "resolution": "1792 x 828 pixels",
      "chip": "A13 Bionic chip",
      "storage": "64GB, 128GB, 256GB",
      "cameras": "100MP + 12MP",
      "front_camera": "12MP",
      "battery": "Not specified",
      "water_resistant": "Yes, IP68",
      "colors": ["Purple", "Yellow", "Green", "Black", "White", "Red"],
      "price": "Starting at $599",
      "length": "5"
    },
    {
      "model": "iPhone SE (2nd generation)",
      "display": "4.7 inches, Retina HD",
      "resolution": "1334 x 750 pixels",
      "chip": "A13 Bionic chip",
      "storage": "64GB, 128GB, 256GB",
      "cameras": "12MP",
      "front_camera": "7MP",
      "battery": "Not specified",
      "water_resistant": "No",
      "colors": ["Black", "White", "Red"],
      "price": "Starting at $399"
    }
  ]
  
  
  document.querySelector(".form1").addEventListener("submit", function(event){
    event.preventDefault();
    const modelName = document.querySelector("#name").value;
    const phone = mobile.find((phone) => {
        return (
            phone.model.toLowerCase().includes(modelName)
        )
    });
    if (phone) {
        console.log(`Chip for ${modelName}: ${phone.chip}`);
        // document.querySelector(".box").style.backgroundColor = "red";
        document.querySelector(".price").innerHTML = phone.price.slice(12,18)
        document.querySelector(".camera").innerHTML = phone.front_camera
        document.querySelector(".reso").innerHTML = phone.resolution.slice( )
        document.querySelector(".box").style.width = `${phone.price.slice(13,18)/75}vw`;
        document.querySelector(".box2").style.width = `${phone.front_camera.slice(0,2)/2.5}vw`;
        document.querySelector(".box3").style.width = `${phone.price.slice(13,18)/75}vw`;
        console.log(phone.price);
        document.querySelector("#name").value = "";
    } else {
        console.log(`${modelName} not found`);
    }
    
});

  document.querySelector(".form2").addEventListener("submit", function(event){
    event.preventDefault();
    const modelName = document.querySelector("#name2").value;
    const phone = mobile.find((phone) => {
        return (
            phone.model.toLowerCase().includes(modelName)
        )
    });
    if (phone) {
        console.log(`Chip for ${modelName}: ${phone.chip}`);
        // document.querySelector(".box").style.backgroundColor = "red";
        document.querySelector(".box4").style.width = `${phone.price.slice(13,18)/75}vw`;
        document.querySelector(".box5").style.width = `${phone.front_camera.slice(0,2)/2.5}vw`;
        document.querySelector(".box6").style.width = `${phone.price.slice(13,18)/75}vw`;
        console.log(phone.price);
        document.querySelector("#name").value = "";
    } else {
        console.log(`${modelName} not found`);
    }
    
});
// const nameInput = document.querySelector("#name");
// const suggestionsList = document.querySelector("#suggestions");

// nameInput.addEventListener("input", function(event) {
//   const userInput = event.target.value.toLowerCase();
//   const suggestions = mobile.filter(phone => phone.model.toLowerCase().includes(userInput));
//   renderSuggestions(suggestions);
// });

// function renderSuggestions(suggestions) {
//   suggestionsList.innerHTML = "";
//   suggestions.forEach(phone => {
//     const li = document.createElement("li");
//     li.textContent = phone.model;
//     li.addEventListener("click", function() {
//       nameInput.value = phone.model;
//       suggestionsList.innerHTML = "";
//     });
//     suggestionsList.appendChild(li);
//   });
// }
