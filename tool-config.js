export const tool = {
  "id": "E023",
  "title": "유도성 리액턴스 계산기",
  "inputs_text": "정현파 주파수 f [Hz], 인덕턴스 L [H]",
  "formula": "X_L = 2π f L",
  "output_text": "유도성 리액턴스 X_L [Ω]",
  "assumptions": "f,L>0. 이상 인덕터·정현파 정상상태를 가정하고 권선저항·기생용량·자기공진·포화는 제외한다.",
  "purpose": "코일 리액턴스 계산 / 주파수별 유도성 부하 확인",
  "sources": [
    {
      "label": "OpenStax · Simple AC Circuits",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/15-2-simple-ac-circuits"
    }
  ],
  "slug": "eng-inductive-reactance",
  "category": "전기",
  "result_label": "유도성 리액턴스 X_L",
  "result_dimension": "resistance",
  "fields": [
    {
      "key": "f",
      "label": "정현파 주파수 f",
      "dimension": "frequency",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "Hz",
      "display_value": "1000"
    },
    {
      "key": "l",
      "label": "인덕턴스 L",
      "dimension": "inductance",
      "example": 0.01,
      "constraint": "positive",
      "display_unit": "mH",
      "display_value": "10"
    }
  ],
  "site": "https://nanalab.kr/eng-inductive-reactance/",
  "repository": "https://github.com/NaNaCompany/eng-inductive-reactance",
  "condition": "",
  "output_unit": "ohm"
};
