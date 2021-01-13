import {
	Subjects,
	Publisher,
	ExpirationCompleteEvent,
} from '@sirmctickets/commontickets';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
	readonly subject = Subjects.ExpirationComplete;
}
