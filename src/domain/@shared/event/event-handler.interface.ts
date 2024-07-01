import EventInterface from "./event.interface";

// <T extends EventInterface=EventInterface> Garante que os eventos genéricos são do tipo EventInterface
export default interface EventHandlerInterface<T extends EventInterface=EventInterface> {

    handle(event: T): void;

}