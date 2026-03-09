import './App.css'
import Rose from "./assets/Rose.svg?react";
import Case from "./assets/Case.svg?react";
import Letter from "./assets/Letter.svg?react";

import * as Tooltip from "@radix-ui/react-tooltip";
import * as Dialog from "@radix-ui/react-dialog";

function App() {
  return (
    <div id="background">
        <div className="headline">
          <h2>IT'S YOUR</h2>
          <h1>21TH</h1>
          <h2>BIRTHDAY!!!</h2>
          <p id="sub">wish you all the best and happiness may come to you</p>
        </div>

        <div className="center">   
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Case id="case"/>
                </Dialog.Trigger>
              </Dialog.Root>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Rose className="components" id="rose"/>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="overlay" />

                  <Dialog.Content className="flower-modal">
                    <Dialog.Title className="modal-title">🌹 Magic Rose</Dialog.Title>
                    <br/>
                    <Dialog.Description className="modal-description">
                      Tale as old as time 🎵 <br/>
                      True as it can be 🎶
                    </Dialog.Description>

                    <Dialog.Close className="close">Đóng</Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <Letter className="components" id="letter"/>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="overlay" />

                  <Dialog.Content className="modal">
                    <Dialog.Title className="modal-title">Chúc mừng 21 tuổi ngaa 🎉</Dialog.Title>
                    <br/>
                    <Dialog.Description className="modal-description">
                      Vì mắc nhớ Ling Ling và cũng hổng bít tặng gì cho bạn, nên mình ngựa ngựa vẽ tặng bạn bông hoa hồng này 😘
                    </Dialog.Description>
                    <br/>
                    <p className="modal-content">
                      Hôm bữa đi chơi, tui phát hiện cô í đã dùng chiếc ví tui tặng cổ năm ngoái nên tui gấc là vui.
                      Cảm ơn vì đã nhét thật nhiều tiền, thẻ ngân hàng, zai riêu cát độ, thẻ học sinh... vào chiếc ví.
                    </p>

                    <br/>
                    <p className="modal-content">
                      Dù chỉ (mới) gặp nhau được 2 năm thôi, nhưng trộm vía mình chơi với nhau siêu hợp! Mặc dù lâu lâu mình bị đơ đơ,
                      cơ mà cũng chẳng sao cả vì bạn không quánh giá lắm. Ở gần bạn, mình cảm thấy ấm áp và yên lòng vô cùng. Mình nhận ra
                      Ling Ling có một siêu năng lực đó là khiến người khác tự nhiên thấy yêu quý bạn, chính xác hơn là một người đáng yêu.
                      Vậy nên tui mong, chẳng cần phải là bất kì ai hết, mà chỉ cần là Ling Ling, bạn sẽ luôn hạnh phúc 💐
                    </p>

                    <br/>
                    <p className="modal-content">
                      Nhân dịp 21 nồi bánh chưng, xin trân trọng gửi lời chúc mừng sinh nhật hoành tráng to bự nhất quả đất tới Ling Ling.
                      Chúc bạn một năm mới thật là nhiều niềm vui, học được nhiều điều mới cùng các bạn mới, môi trường mới. Mong cho học tập,
                      thi cử, công việc của bạn luôn thuận lợi. Bùm bùm chiu chiu 🎉🎉🎉
                    </p>

                    <br/>
                    <p className="modal-content">
                      Tui mong lại sớm gặp lại bạn.
                    </p>



                    <Dialog.Close className="close">Đóng</Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
        </div>

        <div id="fooster">
        </div>
    </div>
  )
}

export default App
