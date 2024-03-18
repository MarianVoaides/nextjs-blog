import React from 'react'

let data_components = [
        {
          "name": "Intel i9 14th gen",
          "description": "Unleash the power of the latest generation Intel Core i9 processor. Experience unparalleled performance for gaming, content creation, and productivity tasks.",
          "imageUrl": "/i9-14k.jpg"
        },
        {
          "name": "AMD Ryzen 7 58003xd",
          "description": "Meet the ultimate multi-tasking processor - AMD Ryzen 7 58003xd. With lightning-fast speeds and efficient performance, tackle anything from gaming to heavy workloads with ease.",
          "imageUrl": "/ryzen7.jpg"
        },
        {
          "name": "Intel i7 14th gen",
          "description": "Experience exceptional speed and responsiveness with the Intel Core i7 processor. Whether you're gaming or working, this processor delivers unmatched performance.",
          "imageUrl": "/i7-14k.jpg"
        },
        {
          "name": "AMD Ryzen 9 78003xd",
          "description": "Elevate your computing experience with AMD Ryzen 9 78003xd. Dominate every task with lightning-fast speeds, unparalleled performance, and seamless multitasking capabilities.",
          "imageUrl": "/ryzen9.jpg"
        },
        {
          "name": "AMD Radeon 7900xt",
          "description": "Get ready for breathtaking graphics and unrivaled gaming performance with AMD Radeon 7900xt. Immerse yourself in ultra-smooth gameplay and stunning visuals.",
          "imageUrl": "/7900xt.jpg"
        },
        {
          "name": "Nvidia RTX 4070",
          "description": "Unlock the power of real-time ray tracing and AI-enhanced graphics with Nvidia RTX 4070. Experience next-level gaming performance and stunning visual effects.",
          "imageUrl": "/4070.jpg"
        },
        {
            "name": "ASUS ROG Strix X570-E Gaming",
            "description": "Experience unparalleled performance and reliability with the ASUS ROG Strix X570-E Gaming motherboard. Packed with advanced features and cutting-edge technology, it's the perfect choice for high-performance gaming and content creation.",
            "imageUrl": "/ASUS_motherboard.jpg"
        },
        {
            "name": "G.SKILL Trident Z Neo DDR4 RAM",
            "description": "Elevate your gaming experience with G.SKILL Trident Z Neo DDR4 RAM. Featuring stunning RGB lighting and ultra-fast speeds, this RAM is designed to deliver unmatched performance and reliability.",
            "imageUrl": "/trident_z_neo.jpg"
        },
        {
            "name": "MSI MAG B550 Tomahawk",
            "description": "Unlock the power of AMD Ryzen processors with the MSI MAG B550 Tomahawk motherboard. Built for gamers and enthusiasts, it offers exceptional performance, reliability, and expandability for your gaming rig.",
            "imageUrl": "/ASUS_motherboard.jpg"
        },
        {
            "name": "Corsair Vengeance RGB Pro DDR4 RAM",
            "description": "Enhance your gaming PC with Corsair Vengeance RGB Pro DDR4 RAM. Featuring stunning RGB lighting and high-speed performance, it's the perfect choice for gaming enthusiasts and overclockers.",
            "imageUrl": "/trident_z_neo.jpg"
        },
        {
            "name": "Nvidia GeForce RTX 3080",
            "description": "Experience next-generation gaming with Nvidia GeForce RTX 3080. Featuring ray tracing and DLSS technology, it delivers unparalleled graphics performance and realism.",
            "imageUrl": "/rtx3080.jpg"
          },
          {
            "name": "AMD Ryzen 5 5600X",
            "description": "Unleash the power of Zen 3 architecture with AMD Ryzen 5 5600X. Featuring 6 cores and 12 threads, it offers lightning-fast performance for gaming and multitasking.",
            "imageUrl": "/ryzen5.jpg"
          },
          {
            "name": "Corsair iCUE H150i Elite Capellix",
            "description": "Keep your CPU cool with Corsair iCUE H150i Elite Capellix. Featuring a 360mm radiator and Capellix RGB LEDs, it offers efficient cooling and stunning lighting effects.",
            "imageUrl": "/h150i.jpg"
          },
          {
            "name": "ASUS ROG Swift PG279Q",
            "description": "Immerse yourself in smooth gaming visuals with ASUS ROG Swift PG279Q. Featuring a 27-inch IPS panel and G-Sync technology, it offers stunning visuals and tear-free gaming.",
            "imageUrl": "/pg279q.jpg"
          },
          {
            "name": "Samsung 970 EVO Plus 1TB",
            "description": "Boost your system's performance with Samsung 970 EVO Plus NVMe SSD. Featuring V-NAND technology and PCIe Gen 3.0 x4 interface, it offers blazing-fast read/write speeds.",
            "imageUrl": "/970evo.jpg"
          },
          {
            "name": "Logitech G502 Hero",
            "description": "Dominate the battlefield with Logitech G502 Hero gaming mouse. Featuring a HERO sensor and customizable weights, it offers precision and comfort for long gaming sessions.",
            "imageUrl": "/g502.jpg"
          },
          {
            "name": "MSI MPG Z590 Gaming Carbon WiFi",
            "description": "Build your ultimate gaming rig with MSI MPG Z590 Gaming Carbon WiFi motherboard. Featuring PCIe Gen 4.0 support and Mystic Light RGB, it offers exceptional performance and aesthetics.",
            "imageUrl": "/z590.jpg"
          },
          {
            "name": "Crucial Ballistix RGB 16GB DDR4 RAM",
            "description": "Enhance your gaming setup with Crucial Ballistix RGB DDR4 RAM. Featuring customizable RGB lighting and high-performance memory modules, it offers smooth multitasking and gaming.",
            "imageUrl": "/ballistix.jpg"
          },
          {
            "name": "Razer BlackWidow V3 Mechanical Gaming Keyboard",
            "description": "Elevate your gaming experience with Razer BlackWidow V3 Mechanical Gaming Keyboard. Featuring Razer Green switches and customizable RGB lighting, it offers precision and style.",
            "imageUrl": "/blackwidow.jpg"
          },
          {
            "name": "EVGA Supernova 850 G5 Power Supply",
            "description": "Power your gaming PC with EVGA Supernova 850 G5 Power Supply. Featuring 80 Plus Gold certification and fully modular design, it delivers efficient and reliable power delivery.",
            "imageUrl": "/supernova.jpg"
          }
      ];

export function add(comp: any) {
    data_components.push(comp);
    console.log(data_components);
}

export function find_item(name: string){
    return data_components.find(comp => comp.name === name)
}

export default data_components