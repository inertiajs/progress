/**
 * Settings for the Inertia progress plugin.
 */
interface ProgressSettings {
	/**
	 * The delay after which the progress bar will
	 * appear during navigation, in milliseconds.
	 *
	 * Defaults to 250 ms.
	 */
	delay?: number;

	/**
	 * The color of the progress bar.
	 *
	 * Defaults to #29d.
	 */
	color?: string;

	/**
	 * Whether to include the default NProgress styles.
	 *
	 * Defaults to true.
	 */
	includeCSS?: boolean;

	/**
	 * Whether the NProgress spinner will be shown.
	 *
	 * Defaults to false.
	 */
	showSpinner?: boolean;
}

/**
 * An Inertia plugin for showing, updating and hiding the NProgress
 * loading bar by listening to Inertia page visits events.
 */
export const InertiaProgress: {
	/**
	 * Initializes the plugin.
	 *
	 * @param settings Optional settings.
	 */
	init(settings?: ProgressSettings): void;
};
