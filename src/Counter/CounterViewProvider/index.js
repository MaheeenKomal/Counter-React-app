import { CounterViewController } from "../CounterViewController";
import { Counter } from "../Counter";
import { CounterViewModel } from "../CounterViewModel";

export const CounterViewProvider = () => {
  const model = new Counter();
  const viewModel = new CounterViewModel(model);

  return (
    <>
      <CounterViewController viewModel={viewModel} />
    </>
  );
};
