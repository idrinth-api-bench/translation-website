import { Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [MatButtonModule],
	template: `
		<div>
			<h1>Translations | Idrinth API Bench</h1>
			<a href="https://idrinth-api-ben.ch/" target="_blank">
				<img alt="Logo" class="logo" src="/iab-BdrBIAUA.svg" />
			</a>
		</div>

		<div>
			<a href="https://analogjs.org/" target="_blank">
				<img alt="Analog Logo" class="logo analog" src="/analog.svg" />
			</a>
		</div>

		<h2>Analog</h2>

		<h3>The fullstack meta-framework for Angular!</h3>

		<div class="card">
			<button mat-raised-button type="button" (click)="increment()">
				Translations Count {{ count() }}
			</button>
		</div>

		<p class="read-the-docs">
			For guides on how to customize this project, visit the
			<a href="https://analogjs.org" target="_blank">Analog documentation</a>
		</p>
	`,
	styles: [
		`
			h1 {
				color: green;
				font-weight: 500;
				margin: 2rem 0;
			}
			.logo {
				width: 10rem;
				margin: 3rem 0;

				&.analog {
					width: 5rem;
					margin: 0;
					will-change: filter;
				}
			}
			.logo {
				&:hover {
					filter: drop-shadow(0 0 0.3rem #35da1f69);

					&.analog {
						filter: drop-shadow(0 0 0.3rem #646cffaa);
					}
				}
			}

			.read-the-docs {
				color: #888;
			}
		`,
	],
})
export default class HomeComponent {
	count = signal(0);

	increment() {
		this.count.update((count) => count + 1);
	}
}
