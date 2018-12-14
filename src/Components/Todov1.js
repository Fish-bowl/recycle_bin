makeTodo = (e) => {
  const { name, desc } = this.state
  return (
    <Form onSubmit={this.handleSubmit()} >
      <Form.Input
        label="Name:"
        value={name}
        onChange={e => this.setState({ name: e.target.value })}
      />
      <Form.Input
        label="Description:"
        value={desc}
        onChange={e => this.setState({ desc: e.target.value })}
      />
      <Button type='submit' onSubmit={this.handleSubmit()} >Add</Button>
    </Form>
  )
}
