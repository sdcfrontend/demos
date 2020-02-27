module.exports = {
  widgetise: function (body, widgets) {
    let updatedBody = body;

    widgets.forEach(widget => {
      const widgetTag = `<widget id="${widget.id}"></widget>`;

      // render the widget
      const widgetHTML = `<br><div style="background: #00cc99; color: #fff; padding: 100px 0; width:100%; text-align: center"> ${widget.type} widget</div><br>`;

      // replace the widget tag in the body
      updatedBody = updatedBody.replace(widgetTag, widgetHTML);
      updatedBody = updatedBody.replace(new RegExp(/<widget id="[0-9]+"><\/widget>[\s]*/), '');
    });
    return updatedBody;
  }
}