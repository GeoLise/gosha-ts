import Big404 from "../../public/big404.svg";
import Image from "next/image";
export default function NotFound() {
	return (
		<div className="flex flex-col container mx-auto items-center justify-center h-screen space-y-12">
				<Image src={Big404} alt="Not found image"/>
				<div className="text-center space-y-4">
					<h1 className="text-xl">error name</h1>
					<p className="text-base">К сожалению, страница, которую вы ищете, не существует или была удалена.</p>
				</div>
		</div>
	)
}
