import RangeSlider from 'vue-range-slider';

export default function(h, {parent}) {
	let {
		computedMaxScaling,
		computedMinScaling,
		disabled,
		scaleTo,
		scaling,
	} = parent;

	return h(
		RangeSlider,
		{
			class: 'ma-1',
			props: {
				disabled,
				hideDetails: true,
				max: computedMaxScaling,
				min: computedMinScaling,
				step: 0.1,
				value: scaling,
			},
			on: {
				change: scaleTo,
			}
		},
	);
}
