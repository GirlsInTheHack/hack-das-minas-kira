import React from "react";
import { Text, Data, Title, SubTitle, Hr, Input, Button, Img } from "../forum/styles";

import Comment from "../../components/Comment";
import Question from "../../components/Question";

const TOPIC_ID_PROTOTYPE =  '62c19fedf4bf50f258939a9a';


export default function Forum() {
  return (
    <div className="App">
      <Title>Métodos contraceptivos naturais funcionam?</Title>
      <Img src="./images/kira.png"/>
      <Data>31 de janeiro de 2022</Data>
      <Text>
      Métodos contraceptivos naturais são tão antigos que se você perguntar para a sua avó,
      até ela, em algum momento da vida, já usou um método como a tabelinha, por exemplo. 
      Agora, se a gente olhar o tamanho das famílias de antigamente dá pra perceber que 
      a efetividade dos métodos contraceptivos naturais pode não ser, assim, tão eficiente rs 😬
      </Text>
      <Text>
      A verdade é que todo método contraceptivo (natural ou não) pode falhar. Nenhum método é 100% efetivo, mas alguns falham mais do que outros. O Índice de Pearl mede, desde 1933, a taxa de falha dos métodos contraceptivos. Ele demonstra quantas mulheres, a cada 100, provavelmente vão engravidar usando um determinado método contraceptivo.
      </Text>
      <Text>
      O DIU de cobre, por exemplo, tem Índice de Pearl com taxa de 0,6 – ou seja, a cada 100 mulheres que usam esse método, menos de 1, ou 0,6, engravida. Já a pílula anticoncepcional tem a taxa de 0,3.
      </Text>
      <Text>
      E muito dessa efetividade depende do uso perfeito do método contraceptivo: tomar a pílula todos os dias no mesmo horário, não esquecer dela um dia, não ter passado mal e vomitado logo depois de tomar a pílula, por exemplo.
      </Text>
      <Text>
      A camisinha tem um Índice de Pearl que varia muito entre o uso perfeito e o uso típico, mais comum. No uso perfeito, o índice é 2, então a cada 100 mulheres que usam a camisinha, 2 engravidam. Mas no uso típico esse número sobe para 16! O que isso significa? Muita gente começa a penetração sem camisinha e só coloca depois, ou não coloca a camisinha do jeito certo. Por isso, além de escolher um método contraceptivo com boa efetividade, é preciso prestar atenção para fazer o uso correto, está bem?
      </Text>
      <SubTitle>
      E o que são métodos contraceptivos naturais?
      </SubTitle>
      <Text>
      Os métodos contraceptivos naturais envolvem você observar as variações fisiológicas do seu corpo. A antiga, clássica, tabelinha é um deles. Com esse método você conta os dias e calcula quando estará ovulando, e aí não tem relações sexuais nesses dias. A calculadora menstrual é uma ótima ferramenta para isso, mas sugerimos que a tabelinha, por mais interessante que seja, não seja seu único método. Combine com outro, como a camisinha, por exemplo.
      </Text>
      <Text>
      No Índice de Pearl, a tabelinha tem uma taxa entre 2 e 5 – o que significa que entre 2 e 5 mulheres, a cada 100 que usam esse método, engravidam. Mas se a tabelinha for utilizada por um ano esse número sobe para 51! O que significa que, entre 100 mulheres que usam a tabelinha ao longo de um ano, mais da metade engravida. É um risco super alto, mostrando a baixa efetividade do método.
      </Text>
      <Text>
      Se o desejo é não engravidar, melhor não confiar unicamente na tabelinha.
      </Text>
      <SubTitle>
      Percepção de fertilidade ou método Billings
      </SubTitle>
      <Text>
      A técnica de observação do muco cervical, mais conhecida como método Billings, consiste em observar o seu corrimento natural e perceber, com os sinais do corpo, quando você começou a ovular. Segundo pesquisadores, as chances de a relação sexual resultar em gravidez com o uso desse método variam conforme a ovulação da mulher: 4% de chance se a relação sexual ocorrer cinco dias antes da ovulação; de 25% a 28% se ocorrer nos dois dias antes da ovulação; de 8% a 10% nas 24 horas após a ovulação.
      </Text>
      <Text>
      Nesse método contraceptivo, você aprende a reconhecer características do muco para entender se ele é de ovulação ou não. Para isso, precisa ter um bom treino e ótimo controle dos dias do seu ciclo menstrual. Ele é diferente da tabelinha porque não depende de uma "conta" e sim de observação diária.
      </Text>
      <SubTitle>
      Coito interrompido
      </SubTitle>
      <Text>
      O coito interrompido também é considerado um método contraceptivo natural. Significa ter relações sexuais sem camisinha e tirar o pênis de dentro da vagina antes do momento da ejaculação. No Índice de Pearl, com o uso perfeito, a taxa é 4, já no uso típico, sobe para 27! O que faz sentido, porque na hora da relação sexual, em geral, estamos muito mais focados no prazer do que em controlar o momento da ejaculação.
      </Text>
      <Text>
      E vale lembrar que, com esse método, você depende 100% do autocontrole do parceiro, que pode não conseguir ter toda essa percepção, por isso a efetividade é baixa.
      </Text>
      <Text>
      Os métodos de contracepção naturais são interessantes, mas possuem menos efetividade do que outros métodos, como DIU, pílula e anel vaginal, por exemplo. É importante olhar para si mesma e se perguntar como você lidaria com uma gravidez inesperada ao depender desses métodos – às vezes pode ser um momento de vida que tudo bem correr esse risco.
      </Text>
      <Text>
      Você pode conversar com seu ginecologista para perguntar sobre outras opções. Atualmente, existem métodos contraceptivos que duram 10 anos com alta eficácia, como o DIU de cobre. O importante é estar bem informada e segura das suas escolhas 😉
      </Text>
      
      <Comment topicId={TOPIC_ID_PROTOTYPE}/>
      <Hr/>
      <Input value="Digite seu comentário"/>
      <Button>Enviar</Button>
      <Question destino="forum"></Question>
    </div>
  );
}
