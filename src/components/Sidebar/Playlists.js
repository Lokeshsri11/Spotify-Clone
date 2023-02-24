function Playlists() {
	return (
		<nav className="mx-6 mt-2 py-2 flex-auto border-t border-white border-opacity-20 overflow-auto">
			<ul>
				{new Array(10).fill(<li>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						21. Paul Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						22. Denim Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						23. Eminem Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						24. Paul Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						25. Darwn Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						26. clim Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						27. smith Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						28. Allice Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						29. Blamer Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						30. Aerop Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						31. Quartz Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						32. brendum Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						33. Glane Loki
					</a>
					<a href="#" className="text-s text-link hover:text-white flex h-8 items-center">
						35. Levis Loki
					</a>
				</li>)}
			</ul>
		</nav>
	)
}

export default Playlists