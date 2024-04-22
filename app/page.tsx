import { Button } from "@/components/button";
import { YouTubeEmbed } from '@next/third-parties/google'
import Image from "next/image";

export default function Home() {
	return (
		<>
			<Image
				className="opacity-20 h-full object-cover fixed -z-20"
				src="https://eownerdead.github.io/zundamon/wallpaper.svg"
				width={1920}
				height={1080}
				alt="はいけいずんだもん"
			/>
			<main className="flex min-h-screen flex-col items-center p-24 gap-20">
				<div className="flex flex-col justify-center items-center w-full">
					<Image className="w-40 h-40 rounded-full border-2 border-green-100" src="/yura.png" width={200} height={200} alt="Yura" />
					<h1 className="text-4xl font-semibold text-center text-gray-800"><span className="text-green-200 text-stroke-px text-stroke-black">Y</span>ura</h1>
				</div>
				<div className="flex flex-col items-center justify-center w-full gap-4">
					<h1 className="text-4xl font-semibold opacity-80"> <span className="text-green-500 text-stroke-px text-stroke-black">I</span>nfomation </h1>
					<Button href="#about" >
						<p> 🤵 </p>
						<p className="text-2xl opacity-65"> About Me </p>
					</Button>
					<Button href="#aboutbot">
						<p> 🤖 </p>
						<p className="text-2xl opacity-65"> About Bot </p>
					</Button>
				</div>
				<div className="flex flex-col items-center justify-center w-full gap-4">
					<h1 className="text-4xl font-semibold opacity-80"> <span className="text-green-400 text-stroke-px text-stroke-black">O</span>ther Accounts </h1>
					<Button href="https://github.com/YurakunD3suyo">
						<Image src="/icons/github.svg" width={24} height={24} alt="github's icon" className="w-10 h-10" />
						<p className="text-2xl opacity-65"> Github </p>
					</Button>
					<Button href="https://discord.com/users/1080043118000361542" >
						<Image src="/icons/discord.svg" width={24} height={24} alt="discord's icon" className="w-10 h-10" />
						<p className="text-2xl opacity-65"> Discord </p>
					</Button>
					<Button href="https://osu.ppy.sh/users/34068119" >
						<Image src="/icons/osu.png" width={24} height={24} alt="osu's icon" className="w-10 h-10" />
						<p className="text-2xl opacity-65"> osu! Account</p>
					</Button>
					<Button href="https://www.youtube.com/@yuraRblx0214" >
						<Image src="/icons/youtube.png" width={24} height={24} alt="osu's icon" className="w-10 h-10" />
						<p className="text-2xl opacity-65"> Youtube Sub </p>
					</Button>
				</div>
			</main>
			<div className="flex flex-col min-h-screen justify-center items-center w-full gap-4">
				<div className="relative w-full -top-20 hidden sm:block">
					<div className="absolute min-h-screen -z-10 top-0 left-0 opacity-20 [writing-mode:vertical-rl] text-9xl font-bold">
						About Yuranu & Zundamon
					</div>
				</div>
				<div className="relative w-full block sm:hidden">
					<div className="absolute min-h-screen -z-10 top-0 left-0 opacity-10 [writing-mode:vertical-rl] text-9xl font-bold">
						About Me
					</div>
				</div>
				<div className="flex flex-col lg:pl-64 p-6 sm:p-24 justify-center w-full gap-4" id="about">
					<h1 className="text-5xl font-semibold opacity-80"> About me </h1>
					<div className="text-2xl font-normal opacity-75">
						ゆらぬです。普段はゲームしてます。osuとかosuとかETS2とかマイクラとか... プログラミングとか自作PCとかやってます。地震界隈ではEEWActionというソフトを作っています。とりあえずよろしく。
					</div>
				</div>
				<div className="flex flex-col lg:pl-64 p-6 sm:p-24 justify-center w-full gap-4" id="aboutbot">
					<h1 className="text-5xl font-semibold opacity-80"> About Bot </h1>
					<div className="text-2xl font-normal opacity-75">
						ずんだボットなのだ！　僕はゆらぬの「ボット作りたい！」という思いで生まれて、ほかの人にもたくさん協力してもらっているのだ！みんなにも使ってもらえるように頑張っているのでよろしくなのだ！
					</div>
				</div>
			</div>
			<div className="absolute min-h-screen -z-10 top-0 left-0 opacity-20 [writing-mode:vertical-rl] text-9xl font-bold">
				Yuranu Zundamon
			</div>
		</>
	);
}
