export function handleSwipeTemplate(direction, state, setState, data) {
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

export function keyHandlerTemplate(key, stateId, setStateId, data) {
	if (key == "d" || key == "ArrowRight") {
		if (stateId == data.length - 1) {
			setStateId(0);
		} else {
			setStateId(stateId + 1);
		}
	} else if (key == "a" || key == "ArrowLeft") {
		if (stateId == 0) {
			setStateId(data.length - 1);
		} else {
			setStateId(stateId - 1);
		}
	}
}
