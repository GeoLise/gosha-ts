import Image from "next/image";
import { Button } from "~/components/ui/button";
import I from "../../public/Img.svg";
import Free from "../../public/Free.svg";
import Frame74 from "../../public/Frame 74.svg";
import Frame75 from "../../public/Frame 75.svg";
import Man from "../../public/man.svg";
import Group from "../../public/Group.svg";
import Mobile from "../../public/Mobile.svg";
import Pig from "../../public/Piggy_Bank_3_.svg"
import { Switch } from "~/components/ui/switch";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import Coffee from "../../public/Coffee_2_.svg";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "~/components/ui/accordion";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter
} from "~/components/ui/dialog";

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
  } from "~/components/ui/sheet"


import { Hourglass } from "lucide-react";
import { Handshake } from "lucide-react";
import { Menu } from "lucide-react";

function Hero() {
	return (
		<div className="flex flex-col md:grid md:grid-cols-[1fr_6fr_1fr] container mx-auto items-center justify-center space-y-16">
			<div className="hidden md:block">
				<Image src={Pig} alt="Piggy bank" className="absolute top-64 w-auto h-auto"/>
			</div>
			<div className="flex flex-col items-center space-y-16">
				<div className="flex flex-col items-center justify-center space-y-8">
					<h1 className="font-extrabold text-4xl md:text-5xl text-center">
						Покупки видны – финансы
						<br /> под контролем.
					</h1>
					<p className="opacity-60 text-center text-base">
						Наша платформа использует искусственный интеллект для автоматического
						считывания
						<br /> данных с чеков, помогая легко отслеживать и организовывать ваши
						покупки по категориям.
					</p>
					<Button className="bg-green-800 w-11/12 md:w-36 text-base rounded-xl">Начать сейчас</Button>
				</div>
				<Image src={I} alt="Image da" className="hidden md:grid"/>
				<Image src={Mobile} alt="Mobile image" className="md:hidden"/>
			</div>
			<div className="hidden md:block">
				<Image src={Coffee} alt="Cup of coffee" className="absolute top-20 right-20 w-auto h-auto"/>
			</div>
		</div>
	);
}


function Advantages() {
	return (
		<div className="flex flex-col container mx-auto items-center justify-center space-y-16">
			<h1 className="font-extrabold text-2xl md:text-5xl text-center">
				<p className="text-green-800">Преимущества</p> нашей
				<br /> платформы
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Image src={Free} alt="Image with man" />
				<div className="space-y-6">
					<div className="flex flex-col space-y-8 border rounded-2xl p-6">
						<h1 className="font-bold text-base md:text-2xl">
							Твои возможности с нами
						</h1>
						<div className="flex space-y-4 md:space-y-0 flex-col md:flex-row w-full justify-center">
							<div className="md:space-y-9 w-[61%] px-2 md:border-l-2">
								<p><p className="opacity-60 font-medium text-base">Полный учет расходов</p><br />61%</p>
								<div className="bg-green-800 w-full h-6 rounded-md" />
							</div>
							<div className="md:space-y-9 w-[17%] px-2 md:border-l-2">
								<p><p className="opacity-60 font-medium text-base">Экономия</p><br />17%</p>
								<div className="bg-green-800 w-full h-6 rounded-md opacity-30" />
							</div>
							<div className="md:space-y-9 w-[22%] px-2 md:border-l-2">
								<p><p className="opacity-60 font-medium text-base">Снижение</p><br />22%</p>
								<div className="bg-green-800 w-full h-6 rounded-md opacity-5" />
							</div>
						</div>
					</div>
					<div className="hidden md:grid grid-cols-2 space-x-6">
						<div className="flex flex-col border rounded-2xl p-6">
							<div className="space-y-2">
								<Hourglass className="text-green-800"/>
								<h1 className="font-bold text-2xl">Экономия времени</h1>
								<p>
									Автоматическое распознавание
									<br />
									чеков сокращает время на
									<br />
									ручной ввод данных. Просто
									<br />
									сделай фото, и все.
								</p>
							</div>
						</div>
						<div className="flex flex-col border rounded-2xl p-6">
							<div className="space-y-2">
								<Handshake className="text-green-800"/>
								<h1 className="font-bold text-2xl">Мнгновенная помощь</h1>
								<p>
									Ваша финансовая информация
									<br />
									всегда под рукой, с точной
									<br />
									аналитикой и удобной
									<br />
									структурой.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Tariffs() {
	return (
		<div className="items-center container flex flex-col mx-auto space-y-16">
			<div className="flex flex-col items-center justify-center space-y-12">
				<h1 className="font-extrabold text-5xl text-center">
					Выбери удобный план <br />
					<p className="text-green-800">для себя</p>
				</h1>
				<div className="flex flex-row space-x-6 items-center">
					<p>Месяц</p>
					<Switch />
					<p>Год</p>
				</div>
			</div>
			<div className="flex flex-row space-x-6">
				<div className="flex flex-col space-y-6 rounded-2xl border py-12 px-6">
					<div className="space-y-[16px]">
						<div className="space-y-[11px]">
							<h1 className="font-bold text-2xl">Базовый</h1>
							<p className="opacity-60 font-medium text-base">
								Минимальный набор функций для удобного
								<br />
								отслеживания расходов.
							</p>
						</div>
						<div className="flex flex-row items-center justify-center space-x-2">
							<h1 className="font-semibold text-[56px]">₽0</h1>
							<p className="opacity-60 font-medium text-base">/ Месяц</p>
						</div>
					</div>
					<Button className="w-[362.67px] h-[44px] text-base bg-white border-2 border-green-800 text-green-800">Начать</Button>
					<div className="flex flex-col space-y-[16px]">
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Автоматическое распознавание чеков</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Сохранение до 50 чеков в месяц</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame75} alt="Image 75"></Image>
							<p>Доступ к графикам статистики</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame75} alt="Image 75"></Image>
							<p>Редактирование категорий</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame75} alt="Image 75"></Image>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame75} alt="Image 75"></Image>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-6 rounded-2xl border py-12 px-6 bg-green-800 text-white">
					<div className="space-y-[16px]">
						<div className="space-y-[11px]">
							<h1 className="font-bold text-2xl">Стандартный</h1>
							<p className="opacity-60 font-medium text-base">
								Для активных пользователей, желающих
								<br />
								больше контроля за финансами.
							</p>
						</div>
						<div className="flex flex-row items-center justify-center space-x-2">
							<h1 className="font-semibold text-[56px]">₽500</h1>
							<p className="opacity-60 font-medium text-base">/ Месяц</p>
						</div>
					</div>
					<Button className="w-[362.67px] h-[44px] text-base bg-white text-green-800">Начать</Button>
					<div className="flex flex-col space-y-[16px]">
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Автоматическое распознавание чеков</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Сохранение до 200 чеков в месяц</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Доступ к графикам статистики</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Редактирование категорий</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame75} alt="Image 75"></Image>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame75} alt="Image 75"></Image>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col space-y-6 rounded-2xl border py-12 px-6">
					<div className="space-y-[16px]">
						<div className="space-y-[11px]">
							<h1 className="font-bold text-2xl">Премиум</h1>
							<p className="opacity-60 font-medium text-base">
								Полный контроль и глубокий анализ финансов
								<br />с дополнительными возможностями.
							</p>
						</div>
						<div className="flex flex-row items-center justify-center space-x-2">
							<h1 className="font-semibold text-[56px]">₽1000</h1>
							<p className="opacity-60 font-medium text-base">/ Месяц</p>
						</div>
					</div>
					<Button className="w-[362.67px] h-[44px] text-base bg-white border-2 border-green-800 text-green-800">Начать</Button>
					<div className="flex flex-col space-y-[16px]">
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Автоматическое распознавание чеков</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Сохранение до 500 чеков в месяц</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Доступ к графикам статистики</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Редактирование категорий</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
						<div className="flex flex-row space-x-[17px]">
							<Image src={Frame74} alt="Image 74"></Image>
							<p>Lorem ipsum dolor sit amet</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Questions() {
	return (
		<div className="items-center container flex flex-col mx-auto space-y-16">
			<div className="flex flex-row ">
				<h1 className="font-extrabold text-5xl text-center">
					Часто задаваемые
					<br />
					вопросы
				</h1>
			</div>
			<div className="font-bold text-2xl flex flex-col w-full">
				<Accordion type="single" className="space-y-6">
					<AccordionItem value="1" className="rounded-3xl">
						<AccordionTrigger className="font-bold text-2xl">Безопасны ли мои данные?</AccordionTrigger>
						<AccordionContent className="text-base">
							Наше приложение использует искусственный интеллект для
							распознавания текста с чеков. Просто сделайте фото, и система
							автоматически сохранит товары и их стоимость в нужные категории.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="2" className="rounded-3xl">
						<AccordionTrigger className="font-bold text-2xl">Как работает приложение?</AccordionTrigger>
						<AccordionContent className="text-base">Наше приложение использует искусственный интеллект для
							распознавания текста с чеков. Просто сделайте фото, и система
							автоматически сохранит товары и их стоимость в нужные категории.
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="3" className="rounded-3xl">
						<AccordionTrigger className="font-bold text-2xl">Как долго хранится информация?</AccordionTrigger>
						<AccordionContent>Наше приложение использует искусственный интеллект для
							распознавания текста с чеков. Просто сделайте фото, и система
							автоматически сохранит товары и их стоимость в нужные категории.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="4" className="rounded-3xl">
						<AccordionTrigger className="font-bold text-2xl">Есть ли бесплатный тариф?</AccordionTrigger>
						<AccordionContent>Наше приложение использует искусственный интеллект для
							распознавания текста с чеков. Просто сделайте фото, и система
							автоматически сохранит товары и их стоимость в нужные категории.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="5" className="rounded-3xl">
						<AccordionTrigger className="font-bold text-2xl">Как настроить категории расходов?</AccordionTrigger>
						<AccordionContent>Наше приложение использует искусственный интеллект для
							распознавания текста с чеков. Просто сделайте фото, и система
							автоматически сохранит товары и их стоимость в нужные категории.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}

function CTA(){
	return(
		<div className="items-center justify-center container mx-auto space-y-16 bg-green-800 rounded-2xl py-4 px-6 md:py-20 md:px-20">
			<div className="flex flex-col md:flex-row items-center justify-between space-x-12">
				<div className="text-white space-y-6">
					<h1 className="font-extrabold text-2xl md:text-5xl">Остались вопросы?<br/>Напишите нам!</h1>
					<p className="text-base opacity-60">Мы всегда рядом, чтобы помочь вам сделать управление финансами ещё
						<br/>проще. Оставьте свой вопрос или пожелание, и мы свяжемся с вами в
						<br/>ближайшее время. Мы ценим ваше мнение и работаем для вас!
					</p>
					
					<Dialog>
						<DialogTrigger asChild>
							<Button className="bg-white text-green-800 w-11/12 md:w-36 text-base">Задать вопрос</Button>
						</DialogTrigger>
						<DialogContent className="">
							<DialogHeader>
								<DialogTitle>Оставить заявку</DialogTitle>
							</DialogHeader>
							<div className="flex flex-col space-y-4">
								<div>
									<Input
									id="name"
									placeholder="Имя"
									className="col-span-3 rounded-xl"
									/>
								</div>
								<div>
									<Label htmlFor="phone" className="text-right"/>
									<Input
									id="phone"
									placeholder="Телефон"
									className="col-span-3 text-base rounded-xl"
									/>
								</div>
								<div>
									<Label htmlFor="email" className="text-right"/>
									<Input
									id="email"
									placeholder="Почта"
									className="col-span-3 rounded-xl"
									/>
								</div>
							</div>
							<DialogFooter className="">
								<Button className="bg-green-800 text-white w-full rounded-xl h-11">Отправить</Button>
							</DialogFooter>
						</DialogContent>
						</Dialog>
				</div>
				<div>
					<Image src={Man} alt="Man image"/>
				</div>
			</div>
		</div>
	);
}

function LOGO(){
	return (
		<div className="items-center container flex flex-col mx-auto space-y-16">
			<div className="flex flex-row justify-center space-x-3">
				<Image src={Group} alt="Group logo"/>
				<h1 className="font-extrabold text-2xl text-green-800">CHECKLY</h1>
			</div>
			<div className="flex flex-col md:space-x-12 items-center font-bold text-base md:flex-row">
				<p className="py-3">Тарифы</p>
				<p className="py-3">Оферта</p>
				<p className="py-3">Политика конфинедциальности</p>
				<p className="py-3">Компания</p>
			</div>
			<div></div>
			<p className="opacity-60 text-base">2024 Все права защищены</p>
		</div>
	);
}

function Header(){
	return (
		<header className="py-4 px-2 md:py-5 md:px-20">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row items-center space-x-3">
					<Image src={Group} alt="Group logo"/>
					<h1 className="font-extrabold text-2xl text-green-800">CHECKLY</h1>
				</div>
				<div className="hidden md:flex flex-row space-x-6 text-base font-semibold">
					<p>Преимущества</p>
					<p>Тарифы</p>
					<p>Вопросы</p>
					<p>Контакты</p>
				</div>
				<div className="hidden md:flex">
					<Button className="bg-green-800 text-white w-36 h-11 rounded-xl">Вход</Button>
				</div>
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger>
							<Menu className="text-green-800 w-6 h-6"/>
						</SheetTrigger>
						<SheetContent className="w-full h-full">
							<SheetHeader className="space-y-6 grid grid-rows-[1fr_9fr_1fr]">
								<header className="h-16">
									<div className="flex flex-row items-center space-x-3">
										<Image src={Group} alt="Group logo"/>
										<h1 className="font-extrabold text-2xl text-green-800">CHECKLY</h1>
									</div>
								</header>
								<div className="font-semibold text-base space-y-6">
									<SheetTitle>Продукт</SheetTitle>
									<SheetTitle>Тарифы</SheetTitle>
									<SheetTitle>О нас</SheetTitle>
									<SheetTitle>Контакты</SheetTitle>
								</div>
								<SheetDescription className="">
									<Button className="bg-green-800 text-white h-11 rounded-xl w-11/12">Вход</Button>
								</SheetDescription>
							</SheetHeader>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}

export default function Home() {
	// return (
	// 	<div className="w-screen h-screen bg-red-400 sm:bg-blue-400 md:bg-green-400 lg:bg-yellow-400 xl:bg-purple-400"></div>
	// );

	return (
		<html>
			<Header/>
			<div className="space-y-40 py-14">
				<Hero />
				<Advantages />
				<Tariffs />
				<Questions />
				<CTA/>
				<LOGO/>
			</div>
		</html>
	);
}
