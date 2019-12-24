import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
			<div className="container">
				<Link href="/">
					<a className="navbar-brand">BitzPrize</a>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarColor01"
					aria-controls="navbarColor01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarColor01">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<Link href="/">
								<a className="nav-link">
									Home{" "}
									<span className="sr-only">(current)</span>
								</a>
							</Link>
						</li>
						<Link href="/about">
							<li className="nav-item">
								<a className="nav-link">About</a>
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
