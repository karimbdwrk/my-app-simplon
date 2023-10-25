import React, { useState } from "react";

const Counter = ({ name }) => {
	const [count, setCount] = useState(0);

	const handleIncrement = (i) => {
		setCount(count + i);
	};

	const handleDecrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<p>
				{name} : {count}
			</p>
			<button onClick={handleDecrement}>-1</button>
			<button onClick={() => handleIncrement(1)}>+1</button>
			<button onClick={() => handleIncrement(5)}>+5</button>
			<button onClick={() => handleIncrement(10)}>+10</button>
		</div>
	);
};

export default Counter;
