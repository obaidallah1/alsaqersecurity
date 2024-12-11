const Topbar: React.FC = () => {
    return (
      <>
        <div className="bg-secondary text-white">
          <div className="container mx-auto flex justify-between py-2 px-4">
            <div className="flex items-center">
              <p className="mr-2">Opening Hours:</p>
              <span>8.00AM - 9.00PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <p>Follow Us:</p>
              <a href="#" className="px-2">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-0 border-b border-gray-200">
          <div>
            <h1 className="text-2xl font-bold text-secondary">
              <span className="text-primary">Safety</span>First
            </h1>
          </div>
          <div className="flex space-x-8 text-center">
            <div>
              <h6 className="font-bold text-primary">Office</h6>
              <p>كرينر - شارع الملك سلمان</p>
              <p>عمارة أبديت الدور الثاني</p>
            </div>
            <div>
              <h6 className="font-bold text-primary">Email</h6>
              <p>info@alsaqersecurity.com</p>
            </div>
            <div>
              <h6 className="font-bold text-primary">Contact</h6>
              <p>+967 02 258 013</p>
              <p>+967 02 264 491</p>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Topbar;
  