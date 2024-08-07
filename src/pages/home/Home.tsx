const Home = () => {
	return (
		<div className="min-h-screen flex flex-col relative ">
			<div className="lg:w-2/3 space-y-10">
				<h1 className="text-[36px] sm:text-[40px] md:text-[52px] xl:text-[62px] font-semibold mt-24  xl:mt-56 xl:leading-[70px]">
					Connecting Individuals - forging{" "}
					<span className="text-mm-primary-500">relationships</span>
				</h1>
				<p className="w-[60%]">
					The objective of this site is to create networking opportunities for
					Individuals who belong, or are in some way connected, to our group
				</p>
			</div>
			<div className="w-1/3"></div>
			<div className="xl:absolute top-0 w-full  lg:block">
				<img
					className="w-full md:w-[85%] lg:w-[60%]  lg:top-36  absolute lg:right-0 lg:-mx-16"
					src="/banner.png"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Home;
