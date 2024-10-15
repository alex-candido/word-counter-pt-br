'use client';

import { useState } from 'react';

import { useMockupData } from '@/mock';
import textProcessingService from '@/services/text-processing-service';

const mockupData = useMockupData();

export default function HomePage() {
  const [textProcessing, useTextProcessing] = useState<IDocument | any>({});

  const genderMockDocument: string = mockupData.genderMockDocument.rawText;
  const pluralMockDocument: string = mockupData.pluralMockDocument.rawText;

  function handleTextProcessing() {
    const textProcessing: IDocument = textProcessingService(
      String(`Esta história cresceu conforme foi sendo contada, até se tornar uma
história da Grande Guerra do Anel, incluindo muitas passagens da história
ainda mais antiga que a precedeu. O conto foi iniciado logo depois queO
Hobbit foi escrito e antes de sua publicação, em 1937; mas não continuou
nessa sequência, pois eu queria primeiro completar e colocar em ordem a
mitologia e as lendas dos Dias Antigos, que já vinham tomando forma havia
alguns anos. Quis fazer isso para minha própria satisfação, e tinha alguma
esperança de que outras pessoas ficassem interessadas nesse trabalho,
especialmente por ser ele fruto de uma inspiração primordialmente
linguística, e por ter sido iniciado a fim de fornecer o pano de fundo
“histórico” necessário para as línguas élficas.
Quando aqueles a quem pedi opinião e aconselhamento corrigiram
alguma esperança por nenhuma esperança, eu voltei à sequência, encorajado
pelos leitores que solicitavam mais informações sobre os hobbits e suas
aventuras. M as a história foi levada irresistivelmente em direção ao mundo
mais antigo e tornou-se, por assim dizer, um relato de seu fim e extinção,
antes que o início e o meio tivessem sido contados. O processo havia
começado enquanto eu estava escrevendo O Hobbit, no qual já havia
algumas referências ao material mais antigo: Elrond, Gondolin, os Altos-Elfos
e os orcs, além de passagens que surgiram espontaneamente e tratavam de
coisas mais elevadas ou profundas ou obscuras do que poderiam parecer à
primeira vista: Durin, M oria, Gandalf, o N ecromante e o Anel. A descoberta
da importância dessas passagens e de sua relação com as histórias antigas
revelou a Terceira Era e seu apogeu na Guerra do Anel.
Aqueles que pediram por mais informações sobre os hobbits
finalmente as conseguiram, mas tiveram de esperar um longo tempo, pois a
composição de O Senhor dos A néisaconteceu em intervalos entre os anos de
1936 e 1949, um período no qual eu tinha muitos deveres que não
negligenciei, e muitos outros interesses como estudante e professor que
frequentemente me absorviam. A demora, sem dúvida, aumentou com o
estouro da guerra em 1939, e no final desse ano eu ainda não tinha
terminado o Livro I. Apesar da escuridão dos cinco anos seguintes, descobri
que a história não podia ser inteiramente abandonada, e continuei de
maneira árdua, principalmente à noite, até parar perante o túmulo de Balin
em Moria. Ali fiz uma pausa prolongada. Já se passara quase um ano quando
comecei de novo, e então cheguei a Lothlórien e ao Grande Rio, no final de
1941. N o ano seguinte escrevi os primeiros rascunhos do material que agora
representa o Livro III e os inícios dos C apítulos I e III do Livro V, e ali,
quando os faróis se iluminaram em Anórien e Théoden chegou ao Vale
Harg, eu parei. A previsão falhara e não havia tempo para reconsiderar.
Foi durante 1944 que, deixando as pontas soltas e as perplexidades de
uma guerra que eu tinha por tarefa conduzir, ou ao menos reportar, eu me
forcei a lidar com a viagem de Frodo a M ordor. Esses capítulos, que
finalmente se tornaram o Livro I V, foram escritos e enviados em forma de
seriado ao meu filho, C hristopher, que naquela época estava na África do
Sul com aRoyal Air Force. Todavia, passaram-se mais cinco anos até o conto
chegar ao seu fim atual; nesse tempo, troquei de casa, de cargo e de
universidade, e, embora os dias fossem menos sombrios, não eram menos
árduos. Então, quando o “final” fora atingido, a história inteira precisava ser
revisada e, na verdade, em grande parte reescrita. E precisava ser
datilografada, e redatilografada, por mim; o custo do trabalho de um
profissional que usava os dez dedos estava além das minhas possibilidades.
O Senhor dos A néisfoi lido por muitas pessoas desde que finalmente
foi lançado na forma impressa, e eu gostaria de dizer algumas coisas aqui,
com referência às muitas suposições ou opiniões, que obtive ou li, a respeito
dos motivos e do significado da história.
O motivo principal foi o desejo de um contador de histórias de tentar
fazer uma história realmente longa, que prendesse a atenção dos leitores,
que os divertisse, que os deliciasse e às vezes, quem sabe, os excitasse ou
emocionasse profundamente. C omo parâmetro eu tinha apenas meus
próprios sentimentos a respeito do que seria atraente ou comovente, e para
muitos o parâmetro foi inevitavelmente uma falha constante. Algumas
pessoas que leram o livro, ou que de qualquer forma fizeram uma crítica
dele, acharam-no enfadonho, absurdo ou desprezível; e eu não tenho razões
para reclamar, uma vez que tenho opiniões similares a respeito do trabalho
dessas pessoas, ou dos tipos de obras que elas evidentemente preferem. Mas,
mesmo do ponto de vista de muitos que gostaram de minha história, há
muita coisa que deixa a desejar. Talvez não seja possível numa história longa
agradar a todos em todos os pontos, nem desagradar a todos nos mesmos
pontos; pois, pelas cartas que recebi, percebo que as passagens ou capítulos
que para alguns são uma lástima são especialmente aprovados por outros. O
leitor mais crítico de todos, eu mesmo, agora encontra muitos defeitos,
menores e maiores, mas, felizmente, não tendo a obrigação de criticar o livro
ou escrevê-lo novamente, passará sobre eles em silêncio, com a exceção de
um defeito que foi notado por alguns: o livro é curto demais.
Quanto a qualquer significado oculto ou “mensagem” na intenção do
autor, estes não existem. O livro não é nem alegórico e nem se refere a fatos
contemporâneos. C onforme a história se desenvolvia, foi criando raízes (no
passado) e lançou ramos inesperados: mas seu tema principal foi definido no
início pela inevitável escolha do Anel como o elo entre este livro eO Hobbit.
O capítulo crucial, “A sombra do passado”, é uma das partes mais antigas do
conto. Foi escrito muito antes que o prenúncio de 1939 se tornasse uma
ameaça de desastre inevitável, e desse ponto a história teria sido
desenvolvida essencialmente na mesma linha, mesmo que o desastre tivesse
sido evitado. Suas fontes são coisas que já estavam presentes na mente
muito antes, ou em alguns casos já escritas, e pouco ou nada foi modificado
pela guerra que começou em 1939 ou suas sequelas.
A verdadeira guerra não se assemelha à guerra lendária em seu
processo ou em sua conclusão. Se ela houvesse inspirado ou conduzido o
desenvolvimento da lenda, então certamente o Anel teria sido apreendido e
usado contra Sauron; este não teria sido aniquilado, mas escravizado, e
Barad-dûr não teria sido destruída, mas ocupada. Saruman, não
conseguindo se apoderar do Anel, teria em meio à confusão e às traições da
época, encontrado em M ordor as conexões perdidas em suas próprias
pesquisas sobre a Tradição do Anel, e logo teria feito um Grande Anel para si
próprio, com o qual poderia desafiar o pretenso soberano da Terra-média.
N esse conflito, ambos os lados teriam considerado os hobbits com ódio e
desprezo: estes não teriam sobrevivido por muito tempo, nem mesmo como
escravos.
Outros arranjos poderiam ser criados de acordo com os gostos ou as
visões daqueles que gostam de alegorias ou referências tópicas. M as eu
cordialmente desgosto de alegorias em todas as suas manifestações, e sempre
foi assim desde que me tornei adulto e perspicaz o suficiente para detectar
sua presença. Gosto muito mais de histórias, verdadeiras ou inventadas,
com sua aplicabilidade variada ao pensamento e à experiência dos leitores.
Acho que muitos confundem “aplicabilidade” com “alegoria”; mas a
primeira reside na liberdade do leitor, e a segunda na dominação proposital
do autor.
É claro que um autor não consegue evitar ser afetado por sua própria
experiência, mas os modos pelos quais os germes da história usam o solo da
experiência são extremamente complexos, e as tentativas de definição do
processo são, na melhor das hipóteses, suposições feitas a partir de
evidências inadequadas e ambíguas. Também não é verdadeiro, embora seja
naturalmente atraente, quando as vidas de um autor e de um crítico se
justapõem, supor que os movimentos do pensamento e os eventos das
épocas comuns a ambos tenham sido necessariamente as influências mais
poderosas. N a verdade, é preciso estar pessoalmente sob a sombra da guerra
para sentir totalmente sua opressão; mas, conforme os anos passam, parece
que fica cada vez mais esquecido o fato de que ser apanhado na juventude
por 1914 não foi uma experiência menos terrível do que ficar envolvido com
1939 e os anos seguintes. Em 1918, todos os meus amigos íntimos, com a
exceção de um, estavam mortos. Ou, para falar de um assunto menos triste:
algumas pessoas supuseram que “O expurgo do C ondado” reflete a situação
da I nglaterra na época em que eu terminava minha história. I sso não é
verdade. Esse capítulo é uma parte essencial do enredo, previsto desde o
início, embora neste episódio tenha sido modificado pelo modo como o
caráter de Saruman se configura na história, sem, é preciso que eu diga,
qualquer significado alegórico ou referência política de qualquer tipo. Ele
tem de fato alguma base na experiência, embora pequena (a situação
econômica era totalmente diferente), e muito anterior. O lugar em que vivi
na infância estava sendo lamentavelmente destruído antes que eu
completasse dez anos, numa época em que automóveis eram objetos raros
(eu nunca tinha visto um) e os homens ainda estavam construindo
ferrovias suburbanas. Recentemente vi num jornal a fotografia da ruína do
outrora próspero moinho de milho ao lado de seu lago que muito tempo
atrás me parecia tão importante. J amais gostei da aparência do M oleiro
jovem, mas seu pai, o M oleiro velho,`),
    );
    useTextProcessing(textProcessing);
  }
  return (
    <>
      <div className="min-h-screen">
        <div className="container mx-auto w-[80%]">
          <p className="title pb-4">Home Page</p>
          <div className="content my-4">{textProcessing.raw_text}</div>
          <button
            className="rounded py-2 px-4 bg-blue-600"
            onClick={() => handleTextProcessing()}
          >
            Execute
          </button>
        </div>
      </div>
      ;
    </>
  );
}
