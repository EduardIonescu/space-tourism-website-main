export default function handleSwipeTemplate(direction, state, setState, data) {
	if (direction == "right") {
		if (state == 0) {
			setState(data.length - 1);
		} else {
			setState(state - 1);
		}
	} else if (direction == "left") {
		if (state == data.length - 1) {
			setState(0);
		} else {
			setState(state + 1);
		}
	}
}
