export default function(h, {
	listeners,
	parent,
	props,
}) {
	return h(
		'sui-button',
		{
			class: 'ma-1',
			props: {
				disabled: parent.disabled,
				flat: true,
				icon: true,
			},
			on: listeners,
		},
		[h(
			'sui-icon',
			{
				style: props.iconStyle,
				class: `icon ${props.icon}`,
				props: {
					name: props.icon,
				},
			},
			props.icon,
		)],
	);
}
