import Image from 'next/image'
import Link from 'next/link';

function getStaticComp() {
  const components = [
    {"name": "CPU1", "description": "Central Processing Unit", "imageUrl": "/cpu-image.jpg"},
    {"name": "CPU2", "description": "Central Processing Unit", "imageUrl": "/cpu-image.jpg"},
    {"name": "CPU3", "description": "Central Processing Unit", "imageUrl": "/cpu-image.jpg"},
    {"name": "CPU4", "description": "Central Processing Unit", "imageUrl": "/cpu-image.jpg"},
    {"name": "CPU5", "description": "Central Processing Unit", "imageUrl": "/cpu-image.jpg"},
    {"name": "CPU6", "description": "Central Processing Unit", "imageUrl": "/cpu-image.jpg"},
    {"name": "CPU7", "description": "Central Processing Unit", "imageUrl": "/cpu-image.jpg"},
    {"name": "CPU8", "description": "Central Processing Unit", "imageUrl": "/cpu-image.jpg"},
    {"name": "GPU", "description": "Graphics Processing Unit", "imageUrl": "/gpu-image.jpg"}
];
  return components
}

require('./page.css')
export default async function Home({
  
}) {
  const components = await getStaticComp();
return <main>
    <section className="hero">
    <h2>Welcome to our PC Components Store</h2>
    <p>Find the best deals on CPUs, GPUs, motherboards, RAM, and more!</p>
    <a href="#" className="btn">Shop Now</a>
  </section>

  <section className="featured-products">
    <h2>Featured Products</h2>
    <ul>
      {components.map((component: any) => {
        // Render each component as a list item
        return (<Link key = {component.id} href={`/products/${encodeURIComponent(component.name)}`}>
            <li>
          <div  key={component.name}>
           {component.name}
          </div>
          <div  key={component.description}>
           {component.description}
          </div>
          <div  key={component.imageUrl}>
           <Image alt="lalala" width={50} height={50} src = {component.imageUrl}></Image>
          </div>
        </li>
        </Link> 
        );
      })}
    </ul>
</section>

 
</main>
}


