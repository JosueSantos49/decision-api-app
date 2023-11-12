import { FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormValidations {

  //Genérico para comparar valores de dois campos (pode ser usado com qualquer campo)
  static equalsTo(otherField: string){
    const validator = (formControl: FormControl) => {

      //Verificar se o campo foi passado realmente
      if(otherField == null){
        throw new Error('É necessário informar um campo.');
      }

      //Possa ser que quando renderiza a tela o formulário ainda não esteja pronto.
      if(!formControl.root || !(<FormGroup>formControl.root).controls){
        return null;
      }

      //Acessar o campo informado com cast
      const field = (<FormGroup>formControl.root).get(otherField);

      //Se o campo não existir
      if(!field){
        throw new Error('É necessário informar um campo válido.');
      }

      //Comparação retorna inválido
      if(field.value !== formControl.value){
        return { equalsTo : otherField };
      }

      //caso o campo seja igual retorna null para dizer que o campo é válido
      return null;

    };
    return validator;
  }

}
