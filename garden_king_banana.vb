Public Class frmYouthInMotion

Dim objYouth As Youth

Private Sub frmYouthInMotion_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load
    
    objYouth = New Youth()

End Sub

Private Sub btnRegister_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnRegister.Click

    Dim strName As String
    Dim strEmail As String
    Dim strPhone As String
    Dim strGender As String
    Dim strProgram As String
    Dim intAge As Integer
    Dim dteBirthdate As Date
    
    strName = txtName.Text
    strEmail = txtEmail.Text
    strPhone = txtPhone.Text
    strGender = cboGender.Text
    strProgram = cboProgram.Text
    intAge = CInt(txtAge.Text)
    dteBirthdate = dtpBirthdate.Value
    
    ' Set the values for the Youth object
    objYouth.Name = strName
    objYouth.Email = strEmail
    objYouth.Phone = strPhone
    objYouth.Gender = strGender
    objYouth.Program = strProgram
    objYouth.Age = intAge
    objYouth.Birthdate = dteBirthdate
    
    ' Display the results
    lblResults.Text = objYouth.ToString()
    
End Sub

Private Sub btnClear_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles btnClear.Click

    txtName.Clear()
    txtEmail.Clear()
    txtPhone.Clear()
    txtAge.Clear()
    lblResults.Text = String.Empty
    cboGender.SelectedIndex = -1
    cboProgram.SelectedIndex = -1
    dtpBirthdate.Value = Today

End Sub

Private Sub ExitToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles ExitToolStripMenuItem.Click
    Application.Exit()
End Sub

Private Sub AboutToolStripMenuItem_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles AboutToolStripMenuItem.Click
    MessageBox.Show("Youth In Motion" & vbCrLf & "Version 1.0" & vbCrLf & "Copyright 2018", "About Youth In Motion")
End Sub

End Class