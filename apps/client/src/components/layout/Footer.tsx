import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Image src="/images/logo-white.png" alt="Learnova Logo" width={40} height={40} />
            <div className="ml-2">
              <h3 className="text-xl font-bold">Learnova</h3>
              <p className="text-sm">
                Belajar Bebas,
                <br />
                Masa Depan Cerdas
              </p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm">© {new Date().getFullYear()} FASTRESP</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer