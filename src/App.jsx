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
                      I love you ❤️
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
                    <Dialog.Title className="modal-title">Chúc mừng 20 tuổi ngaa 🎉</Dialog.Title>
                    <br/>
                    <Dialog.Description className="modal-description">
                      Nhân dịp nth bước vào một trong những mốc quan trọng của cuộc đời, xin dành tặng món quà đặc biệt.
                    </Dialog.Description>
                    <br/>
                    <p className="modal-content">
                      Ngồi rảnh rảnh nghĩ một hồi thì lht đã làm cái web ngựa ngựa này để chào đón 20 nồi bánh chưng của em nth.
                      Năm nay công nhận khéo thế nào sinh nhật lại trùng đúng mùng 3 Tết nhỉ, vừa được ăn bánh chưng vừa được ăn bánh kem 😍
                    </p>

                    <br/>
                    <p className="modal-content">
                      Nói chum là, gì muốn nói, cũng đã nói hếc gòi đó. Nhưng mà có một điều muốn nhắn nhủ nth lần nữa là mong nth
                      luôn giữ gìn sức khỏe thật tốt. Mong cổ luôn hài lòng với những gì mình có, và có cuộc đời an yên.
                      Cũng chúc cô í năm nay lại học thêm được nhiều điều mới, thi cử thuận lợi.
                      Gòi mong mọi muộn phiền, áp lực không quá làm khó cho cổ.
                    </p>

                    <br/>
                    <p className="modal-content">
                      Cảm ơn em vì từ trước tới giờ đã luôn lắng nghe, chia sẻ nhiều câu chuyện với lht. Cảm giác những ai đã gặp được em, họ
                      siêu trân trọng em luôn í. Vì sự dễ thương, dễ mến, siêu tâm lý của cổ 💐✨ Tui mong rằng cô í cũng sẽ tự hào và hạnh phúc
                      vì những niềm vui, hạnh phúc cô í đã đem đến cho mọi người. Tui cũng mong, nếu có chuyện gì, cổ cũng có thể tin tưởng và chia sẻ với tôi.
                    </p>

                    <br/>
                    <p className="modal-content">
                      All the best for you too!
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
