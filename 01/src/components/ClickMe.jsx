function ClickMe() {
    function handleClick() {
        alert("Button Clicked!");
    }

    return (
        <div className="flex items-center justify-center">
            <button
                onClick={handleClick}
                className="px-6 py-3 bg-red-500 text-white rounded-lg text-lg"
            >
                Click Me
            </button>
        </div>
    );
}

export default ClickMe;
