import Header from "../Header/Header";
import JobsContainer from "../JobsContainer/JobsContainer";

export default function MainContainer() {
    return (
		<main className='max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]'>
			<Header />

			<JobsContainer />
		</main>
	);
}