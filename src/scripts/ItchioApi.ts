export interface Projects {
	games: Game[]
}

export interface Game {
	min_price: number
	cover_url?: string
	has_demo: boolean
	id: number
	p_windows: boolean
	p_linux: boolean
	p_osx: boolean
	p_android?: boolean
	user?: User
	purchases_count?: number
	in_press_system?: boolean
	type?: Type
	published?: boolean
	url?: string
	classification?: Classification
	views_count?: number
	downloads_count?: number
	created_at?: Date
	title: string
	can_be_bought: boolean
	still_cover_url?: string
	published_at?: Date
	embed?: Embed
	short_text?: string
	p_andro?: number
}

export enum Classification {
	Game = 'game',
	Tool = 'tool',
}

export interface Embed {
	width: number
	height: number
	fullscreen: boolean
}

export enum Type {
	Default = 'default',
	HTML = 'html',
}

export interface User {
	username: Username
	url: string
	cover_url: string
	id: number
}

export enum Username {
	Achtaitaipai = 'achtaitaipai',
	Jjjbon = 'jjjbon',
}

export default async function getGames() {
	const response = await fetch(`https://itch.io/api/1/${import.meta.env.ITCHIOKEY}/my-games`)
	const data = (await response.json()) as Projects
	const games = data.games.filter((el: any) => el.published)
	return games
}
