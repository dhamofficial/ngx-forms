import { Component } from '@angular/core'
import { NgxFormsService } from '@ngx-plus/ngx-forms'

@Component({
  selector: 'fields',
  template: `
    <section class="mt-0">
      <h2>Fields</h2>
      <p class="lead">The <b>NgxFormsService</b> can be used to generate field definitions that can be used to populate the <u><i>fields</i></u> array in your form config</p>
      <ui-card icon="fa fa-code" cardTitle="Code">
        <highlight lang="ts" [code]="exampleConfig"></highlight>
      </ui-card>
    </section>
    <field-types [fields]="fields"></field-types>
  `,
})
export class FieldsComponent {
  constructor(private forms: NgxFormsService) { }

  exampleConfig = `formConfig: {
  fields: [
    this.forms.input('name', {
      label: 'Name',
      placeholder: 'Please enter your name',
    }),
  ]
}`

  item = {}

  fields = [
    {
      name: 'input',
      code: {
        code: `this.forms.input('input', {
  label: 'My Input',
  placeholder: 'My Input',
})`,
      },
      formConfig: {
        fields: [
          this.forms.input('input', {
            label: 'My Input',
            placeholder: 'My Input',
          }),
        ],
      },
    },
    {
      name: 'email',
      code: {
        code: `this.forms.email('emailField', {
  label: 'My Email',
  placeholder: 'My Email',
})`,
      },
      formConfig: {
        fields: [
          this.forms.email('emailField', {
            label: 'My Email',
            placeholder: 'My Email',
          }),
        ],
      },
    },
    {
      name: 'password',
      code: {
        code: `this.forms.password('passwordField', {
  label: 'My Password',
  placeholder: 'My Password',
})`,
      },
      formConfig: {
        fields: [
          this.forms.password('passwordField', {
            label: 'My Password',
            placeholder: 'My Password',
          }),
        ],
      },
    },
    {
      name: 'date',
      code: {
        code: `this.forms.date('dateField', {
  label: 'My Date',
})`,
      },
      formConfig: {
        fields: [
          this.forms.date('dateField', {
            label: 'My Date',
          }),
        ],
      },
    },
    {
      name: 'textarea',
      code: {
        code: `this.forms.textarea('textareaField', {
  label: 'My Textarea',
  placeholder: 'My Textarea',
})`,
      },
      formConfig: {
        fields: [
          this.forms.textarea('textareaField', {
            label: 'My Textarea',
            placeholder: 'My Textarea',
          }),
        ],
      },
    },
    {
      name: 'wysiwyg',
      code: {
        code: `this.forms.wysiwyg('wysiwygField', {
  label: 'My Wysiwyg',
  placeholder: 'My Wysiwyg',
})`,
      },
      formConfig: {
        fields: [
          this.forms.wysiwyg('wysiwygField', {
            label: 'My Wysiwyg',
            placeholder: 'My Wysiwyg',
          }),
        ],
      },
    },
    {
      name: 'select',
      code: {
        code: `this.forms.select('selectField', {
  label: 'My Select',
  options: [
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
  ]
})`,
      },
      formConfig: {
        fields: [
          this.forms.select('selectField', {
            label: 'My Select',
            options: [
              { label: 1, value: 1 },
              { label: 2, value: 2 },
              { label: 3, value: 3 },
            ],
          }),
        ],
      },
    },
  ]
}
