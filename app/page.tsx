

export default function Page() {
  return (
    <section>
      <h1 className="mb-2 text-2xl font-semibold tracking-tighter">
        Christian Figueroa
      </h1>
      <h5 className='font-semibold mb-5'>
        My Portfolio
      </h5>
      <div  className="flex items-center ">
        <img src="https://github.com/christian1209.png" alt="Descripción de la imagen" className="rounded-full w-24 h-24 mb-8 mr-16 mt-10"></img>
        <div>
          <p >  My name is Christian M. Figueroa, a 23-year-old computer engineering student from Mexico, passionate about web development and application development in general.  </p>
        </div>
      </div>
      <p className="mb-4">
        {`Hello and welcome to my portfolio!

Since I began my journey, I've been immersed in the exciting world of technology, exploring the endless possibilities offered by software development.

I thrive on challenges and enjoy pushing myself to the limit.`}
      </p>
      <p className="mb-4">{`

In my portfolio, you'll find a sampling of my projects and work where I've applied my skills in web and application development (check Projects Link at the top of the page ).`}
      </p>
      <p className="mb-4">{`

Thank you for visiting my portfolio and I hope you enjoy exploring my work. Feel free to reach me out if you have any questions!`}
      </p>
    </section>
  )
}
