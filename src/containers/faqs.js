import React from 'react'
import { Accordion, OptForm } from '../components'
import faqsData from '../fixtures/faqs.json'


export function FaqsContainer() {
    return (
        <Accordion>
            <Accordion.Title>Frequently Asked Questions</Accordion.Title>
            {faqsData.map(item =>
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>   
            )}
            <Accordion.Item />

          <OptForm>
              <OptForm.Input placeholder="Email Address" />
              <OptForm.Button> Try it now </OptForm.Button>
              <OptForm.Text> Get notifications for the most popular titles </OptForm.Text>
          </OptForm>
        </Accordion>
    )
}