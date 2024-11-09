const Home = ({ searchParams, params }: SearchParamProps) => {
  return (
    <div className='page-container'>
      <section className='w-full'>
        <h1 className='h1 capitalize'></h1>

        <div className='total-size-section'>
          <p className='body-1'>
            Total: <span className='h5'>0 MB</span>
          </p>

          <div className='sort-container'>
            <p className='body-1 hidden text-light-200 sm:block'>
              Sort by:
            </p>
          </div>
        </div>
      </section>
      {/* render textFile */}
    </div>
  );
};

export default Home;
