import dark from "../assets/dark-icon.png";
import light from "../assets/light-icon.png";

export function DarkMode() {
  function handleClick() {
    if (localStorage.theme === "dark" || !("theme" in localStorage)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  }

  return (
    <>
      <div className="flex items-center mx-[50px]" onClick={handleClick}>
        <span className="dark:bg-black dark:hidden">
          <img src={dark} alt="icon dark" />
        </span>
        <span className="hidden dark:block">
          <img src={light} alt="icon light" />
        </span>
      </div>
    </>
  );
}
