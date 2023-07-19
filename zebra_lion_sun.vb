Public Class Form1
    'This form is used to display the different motion elements of youth 
    
    Dim blnEntered As Boolean
    Dim blnSaved As Boolean
    Dim blnUpdated As Boolean
    Dim blnDisplayed As Boolean
    Dim intCount As Integer
    Dim version As String
   
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        Me.Text = "Youth In Motion"
        version = "1.0.0" 
    End Sub

    Private Sub btnEnter_Click(sender As Object, e As EventArgs) Handles btnEnter.Click
        Dim strDescription As String
        strDescription = InputBox("Please enter a description of a motion element of youth", _
                                  "Enter Motion Element", "")
        If strDescription = "" Then
            blnEntered = False
        Else
            lstMotionElements.Items.Add(strDescription)
            blnEntered = True
        End If
        btnSave.Enabled = blnEntered
    End Sub

    Private Sub btnEdit_Click(sender As Object, e As EventArgs) Handles btnEdit.Click
        If lstMotionElements.SelectedIndex = -1 Then
            MessageBox.Show("Item not selected", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error)
        Else
            Dim strDescription As String
            strDescription = InputBox("Please enter a new description of motion element of youth", _
                                     "Edit Motion Element", lstMotionElements.Text)
            If strDescription = "" Then
                blnUpdated = False
            Else
                lstMotionElements.Items.RemoveAt(lstMotionElements.SelectedIndex)
                lstMotionElements.Items.Insert(lstMotionElements.SelectedIndex, strDescription)
                blnUpdated = True
            End If
            btnSave.Enabled = blnUpdated
        End If
    End Sub

    Private Sub btnDisplay_Click(sender As Object, e As EventArgs) Handles btnDisplay.Click
        If lstMotionElements.SelectedIndex = -1 Then
            MessageBox.Show("Item not selected", "Error", MessageBoxButtons.OK, MessageBoxIcon.Error)
        Else
            MessageBox.Show(lstMotionElements.SelectedItem.ToString, "Motion Element of Youth", _
                            MessageBoxButtons.OK, MessageBoxIcon.Information)
            blnDisplayed = True
        End If
    End Sub

    Private Sub btnSave_Click(sender As Object, e As EventArgs) Handles btnSave.Click
        Dim strFilename As String
        strFilename = InputBox("Please enter a filename for saving the motion elements of youth", _
                               "Save Motion Elements", "youthinmotion.txt")
        If strFilename = "" Then
            blnSaved = False
        Else
            FileOpen(1, strFilename, OpenMode.Output)
            For intCount = 0 To lstMotionElements.Items.Count - 1
                WriteLine(1, lstMotionElements.Items(intCount))
            Next intCount
            FileClose(1)
            blnSaved = True
        End If
    End Sub

    Private Sub btnExit_Click(sender As Object, e As EventArgs) Handles btnExit.Click
        If blnSaved = True Or lstMotionElements.Items.Count = 0 Then
            Me.Close()
        Else
            Dim response As MsgBoxResult
            response = MessageBox.Show("Do you want to save before exiting?", "Save Motion Elements", _
                                       MessageBoxButtons.YesNo, MessageBoxIcon.Question)
            If response = MsgBoxResult.Yes Then
                Dim strFilename As String
                strFilename = InputBox("Please enter a filename for saving the motion elements of youth", _
                                       "Save Motion Elements", "youthinmotion.txt")
                If strFilename = "" Then
                    blnSaved = False
                Else
                    FileOpen(1, strFilename, OpenMode.Output)
                    For intCount = 0 To lstMotionElements.Items.Count - 1
                        WriteLine(1, lstMotionElements.Items(intCount))
                    Next intCount
                    FileClose(1)
                    blnSaved = True
                End If
            Else
                Me.Close()
            End If
        End If
    End Sub
End Class